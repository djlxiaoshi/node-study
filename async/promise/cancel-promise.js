
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello');
    }, 1000);
});

promise1.then((value) => {
    throw new Error('出错啦!');
}).then(value => {
    console.log(value);
}, function (result) {
    console.log(result.message);
    return result;
}).then(function () {
    console.log('DJL箫氏');
});