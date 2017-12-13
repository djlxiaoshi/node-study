const asyncFun = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(value);
        }, 0);
    })
};

asyncFun(1).then(function (value) {
    const val = value.toLowerCase();
    console.info(value);
}, function (value) {
    console.error(value);
    return;
}).catch(function (error) {
    console.error('出错啦');
    console.error(error);
});