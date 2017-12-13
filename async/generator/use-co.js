const fs = require('fs');
const utils = require('util');
const readFile = utils.promisify(fs.readFile);
const co = require('co');

function * gen() {
    try {
        const json = yield readFile('./config.json');
        const config = JSON.parse(json);
        const file2 = yield readFile(config.path);
        console.log(file2.toString());
    } catch(e) {
        console.log('错啦', e);
    }
}

co(gen());