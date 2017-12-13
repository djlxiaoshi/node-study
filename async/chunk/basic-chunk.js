/**
 * @Author JohnLi
 * @Date 2017/12/11 12:02
 */

const fs = require('fs');
const co = require('co');

function readFileChunk(path) {
    return function (cb) {
        fs.readFile(path, cb);
    }
}

function * readFileGen(path) {
    const file = yield readFileChunk(path);
    console.log(file.toString());
}

// co(readFileGen('./config.json'));

const gen = readFileGen('./config.json');
gen.next().value(function (error, file) {
    gen.next(file);
});
