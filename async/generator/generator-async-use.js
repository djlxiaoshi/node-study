const fs = require('fs');
const utils = require('util');
const readFile = utils.promisify(fs.readFile);

function * gen() {
    try {
        const file = yield fs.readFile;
        console.log(file.toString());
    } catch(e) {
        console.log(e);
    }
}

const g = gen();

g.next().value('./config.json', function (error, value) {
  if (error) {
    g.next('文件不存在');
  }
  
  g.next(value);
});
