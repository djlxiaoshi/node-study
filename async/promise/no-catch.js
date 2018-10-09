/**
 * @Author JohnLi
 * @Date 2017/12/13 18:26
 */
const asyncFun = function (value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value);
    }, 0);
  })
};


asyncFun(1).then(function (value) {
  setTimeout(function () {
      console.log(2);
  }, 0);
  consoel.log(value)
});


// setTimeout(function () {
//     console.log(2);
// }, 0);
//
// consoel.log(1)
