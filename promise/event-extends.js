const EventEmitter = require('events');
const utils = require('util');
const fs = require('fs');

function _Promise() {
    return EventEmitter.call(this);
}

utils.inherits(_Promise, EventEmitter);

_Promise.prototype.then = function(callback) {
    this.once('resolve', callback);
    this.once('reject', callback);
};

_Promise.prototype.resolve = function(data) {
    this.emit('resolve', data);
};

_Promise.prototype.reject = function(error) {
    this.emit('reject', error);
};

const promise = new _Promise();
const exetPath = process.cwd();
fs.readFile(`${exetPath}/test.txt`, function(error, file) {
    if (error) {
        promise.reject(error);
        return;
    }
    promise.resolve(file.toString());
});

promise.then(function(data) {
    console.log(data);
});