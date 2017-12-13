const fs = require('fs');
const readable = fs.createReadStream('./writable.txt');
readable.setEncoding('utf8');
readable.on('data', function(chunk){
  console.log(chunk);
});

readable.on('readable', function(chunk){
  console.log('readable');
});

readable.on('end', function(chunk){
  console.log('end');
});