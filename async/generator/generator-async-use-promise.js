const fs = require('fs');
const utils = require('util');
const readFile = utils.promisify(fs.readFile);

function * gen() {
    try {
        const file = yield readFile('./config.json');
        console.log(file.toString());
    } catch(e) {
        console.log(e);
    }
}

const g = gen();

g.next().value.then(function(file) {
    g.next(file);
}, function (error) {
    g.throw('文件不存在');
});
