var ref = function (value) {
  if (value) {
    if (typeof value.then === 'function') {
      return value;
    }
  }

  return {
    then: function (callback) {
      return ref(callback(value));
    }
  };
};

ref('stp1').then(function (value) {
  console.log(value);
  return 'step2';
}).then(function(value) {
  console.log(value);
});
