const fs = require('fs');

const rs = fs.createReadStream(`${process.cwd()}/test.txt`, { highWaterMark: 11 });

const allChunk = [];
rs.on('data', (chunk) => {
    allChunk.push(chunk);
});
module.exports = allChunk;