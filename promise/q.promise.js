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
var defer = function () {
  var pending = [],
    value;
  var promise = new _Promise();

  return {
    resolve: function (_value) {
      if (pending) {
        value = _value;
        for (var i = 0; i < pending.length; i++) {
          var callback = pending[i];
          callback(value);
        }
        pending = undefined;
      } else {
        throw new Error('a promise can be resolved only one time');
      }
    },
    promise: {
      then: function (_callback) {
        var result = defer();
        if (pending) {
          pending.push(_callback);
        } else {
          _callback(value);
        }
      }
    }
  };
};

var syncFunction = function () {
  var result = defer();
  setTimeout(function () {
    result.resolve(1);
  }, 1000);
  return result;
};

syncFunction().then(function (value) {
  console.log(value);
});