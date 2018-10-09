const fs = require('fs');

function * gen() {
    try {
        const config = yield fs.readFile;
        console.log(config.toString());
    } catch(e) {
        console.log('捕获到异常', e);
    }
}

const g = gen();

g.next().value('./config.json', function (error, file) {
  if (error) {
    g.throw('文件不存在');
  }
  g.next(file);
});
