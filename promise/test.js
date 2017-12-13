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

console.log(ref(1));