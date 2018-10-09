const fs = require('fs');
const utils = require('util');
const readFile = utils.promisify(fs.readFile);

function * gen() {
    try {
        const config = yield fs.readFile;
        console.log(config.toString());
    } catch(e) {
        console.log(e);
    }
}

const g = gen();

g.next().value('./config.json', function (error, file) {
  if (error) {
    g.throw('文件不存在');
  }
  g.next(file);
});
