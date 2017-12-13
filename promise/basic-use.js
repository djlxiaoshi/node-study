// 异步操作放在Promise构造器中
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello');
    }, 1000);
});

// 得到异步结果之后的操作
promise1.then((value) => {
    console.log(value, 'world');
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(333);
            resolve('链式写法');
        }, 2000);
    });
}).then(value => {
    console.log(1, value);
    return value;
}).then(value => {
    console.log(2, value);
}).then(value => {
    console.log(3, value);
});

// 链式写法