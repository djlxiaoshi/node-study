/**
 * @Author JohnLi
 * @Date 2017/12/13 16:53
 */
function * gen () {
  const y = yield asyncFun;
}

function asyncFun() {
  setTimeout(function () {
    console.log(1);
  }, 0);
}

const g = gen();
try {

}
g.next().value();

