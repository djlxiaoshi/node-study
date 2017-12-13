function asyncFun1(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 0) {
        resolve(1);
      } else {
        reject(-1);
      }
    }, 0);
  });
}

asyncFun1(2).then(value => {
  return value.toLowerCase();  // 也就是说then中会有一个异常捕获的过程
}, error => {
  console.error(error);
}).then(v => {
  console.log(v);
}, e => {
  console.log('sdfhbdf');
  return e;
}).catch(e => {
  console.log('有错误');
});
