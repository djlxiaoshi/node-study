/**
 * @Author JohnLi
 * @Date 2017/12/14 15:14
 */
const fs = require('fs');
const utils = require('util');
const readFile = utils.promisify(fs.readFile);

function * gen() {
  try {
    const file = yield readFile('./config.json');
    console.log(file.toString());
  } catch(e) {
    console.log('捕获到异常', e);
  }
}

const g = gen();

g.next().value.then(file => {
  g.next(file)
}, error => {
  g.throw('文件不存在');
});
