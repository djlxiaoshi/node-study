const fs = require('fs');

function * gen() {
    try {
        const file = yield fs.readFile;
        console.log(file.toString());
    } catch(e) {
        console.log('捕获到异常', e);
    }
}

const g = gen();

g.next().value('./config1.json', function (error, value) {
  if (error) {
    g.throw('文件不存在');
  }
  g.next(value);
});
