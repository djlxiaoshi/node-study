const fs = require('fs');
const utils = require('util');
const readFile = utils.promisify(fs.readFile);
async function readJsonFile() {
    try {
        const file = await readFile('../generator/config.json');
        console.log(file.toString());
    } catch (e) {
        console.log('出错啦');
    }

}

readJsonFile();