// const fs = require('fs');

// const ws = fs.createWriteStream('./writable.txt');


// ws.on('close', function () {
//     console.log('end');
// })
// ws.write('hello')
// ws.end('!');

const fs = require('fs');
const writable = fs.createWriteStream('./writable.txt');
writable.end('hello');

writable.on('close', () => {
    console.log('close');
});

writable.on('finish', () => {
    console.log('There will be no more data.');
});

