// 异步操作放在Promise构造器中
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello');
    }, 1000);
});

// 得到异步结果之后的操作
promise1.then((value) => {
    console.log(value, 'world');
});

promise1.then((value) => {
    console.log(value);
    return value;
}).then((value) => {
    console.log(value);
}).then((value) => {
    console.log(value);
});