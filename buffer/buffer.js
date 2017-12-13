const fs = require('fs');
const stringDecoder = require('string_decoder').StringDecoder;
const decoder = new stringDecoder('utf8'); 

const rs = fs.createReadStream('./test.txt', {highWaterMark: 11});

let data = '';
let i = 0;
let totalBuffer = [];
rs.on('data', function(chunk){
    totalBuffer.push(chunk);
    data += chunk;
})

rs.on('end', function() {
    console.log(data)
    while(i < totalBuffer.length) {
        console.log(decoder.write(totalBuffer[i]));
        i++;
    }
})




