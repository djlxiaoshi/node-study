const fs = require('fs');

const reabable = fs.createReadStream('./writable.txt');

console.log(reabable._readableState.flowing);

reabable.pause();

console.log(reabable._readableState.flowing);

reabable.resume();

console.log(reabable._readableState.flowing);

reabable.pause();

console.log(reabable._readableState.flowing);


