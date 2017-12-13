Promise.prototype.done = function (resolve, reject) {
    this.then(resolve, reject).catch(function (reason) {
        setTimeout(() => {
           throw reason;
        }, 0);
    });
};

const asyncFun = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(value);
        }, 0);
    })
};


asyncFun(1).then(function (value) {
    throw new Error('then resolve回调出错啦');
}, function (value) {

}).catch(function (error) {
  setTimeout(() => {
    console.log(1111);
  }, 0);
    throw new Error('catch回调出错啦');
});
