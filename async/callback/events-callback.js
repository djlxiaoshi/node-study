/**
 * @Author JohnLi
 * @Date 2017/12/11 10:52
 */

const fs = require('fs');
const EventEmitter = require('events');

class myEmitter extends EventEmitter{}

const event = new myEmitter();

fs.readFile('./error-first.js');

function readFileA() {
    fs.readFile('./error-first.js', function (error, file) {
        event.emit('readFileA', error, file);
    })
}

function readErrorFirstB() {
    fs.readFile('./events-callback.js', function (error, file) {
        event.emit('readFileB', error, file);
    })
}

event.on('readFileA', function (error, file) {
    if (error) {
        console.log(error);
        return;
    }
    
    console.log(file.toString());
    readErrorFirstB()
});

event.on('readFileB', function (file) {
    if (error) {
        console.log(error);
        return;
    }
    
    console.log(file.toString());
});

readFileA();


