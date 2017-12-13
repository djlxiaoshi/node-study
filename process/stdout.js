const fs = require('fs');

const rs = fs.createReadStream('./argv.js').pipe(process.stdout)