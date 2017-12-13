var _Promise = function () {};

var isPromise = function (value) {
  return value && typeof value.then === 'function';
};

var ref = function (value) {
  if (isPromise(value)) return value;

  return {
    then: function (callback) {
      return ref(callback(value));
    }
  };
};

var reject = function (reason) {
  return {
    then: function (callback, errback) {
      return ref(errback(reason));
    }
  };
};

var defer = function () {
  var pending = [],
    value;
  return {
    resolve: function (_value) {
      if (pending) {
        console.log(_value, '----');
        value = ref(_value);
        for (var i = 0; i < pending.length; i++) {
          var callback = pending[i];
          /*
           由于现在value值被包装成了一个
          * var ref = function (value) {
             return {
               then: function (callback) {
                return ref(callback(value));
               }
             };
           };
          *
          * */
          value.then(callback);
          // callback(value);
        }
        pending = undefined;
      }
    },
    promise: {
      then: function (_callback, _errback) {
        var result = defer();
  
        _callback = _callback || function (value) {
          // by default, forward fulfillment
          return value;
        };
        _errback = _errback || function (reason) {
          // by default, forward rejection
          return reject(reason);
        };
  
        var callback = function (value) {
          result.resolve(_callback(value));
        };
        
        if (pending) {
          // pending.push(callback);
          pending.push(_callback);
        } else {
          // callback(value);
          value.then(callback);
        }
  
        return result.promise;  // 返回一个新的promise （为什么要包装一层promise就是因为现在要返回一个promise，而这个promise应该只有一个then方法，否则会把resolve方法也包进去）
      }
    }
  };
};

var syncFunction = function () {
  var result = defer();
  setTimeout(function () {
    result.resolve(1);
  }, 1000);
  return result.promise;
};

syncFunction().then(function (value) {
  console.log(value);
  return 3
}).then(function (value) {
  console.log(value);
});
