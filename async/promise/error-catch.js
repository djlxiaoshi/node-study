const asyncFun = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(value);
        }, 0);
    })
};

asyncFun(1).then(function (value) {
  throw value.toLowerCase();
  // // 如果在这里也是异步抛出一个错误那么也是catch不到的
  // setTimeout(function () {
  //   value.toLowerCase();
  // }, 0);
}, function (value) {

}).then(function (value) {

}, function (result) {
  console.log('捕获到异常', result);
});

