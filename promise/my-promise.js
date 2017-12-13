function _Promise(executor) {
    const _this = this;
    _this.status = 'pendding';
    _this.data = undefined;
    _this.onResolvedCallback = [];
    _this.onRejectedCallback = [];

    this.queue = [];

    function resolve(value) {
        if (_this.status === 'pendding') {
            _this.status === 'resolved';
            _this.data = value;
            // 执行所有then方法中注册的回调函数
<<<<<<< Updated upstream
            for (let i = 0; i < _this.onResolvedCallback.length; i++;) {
=======
            for (let i = 0; i < _this.onResolvedCallback.length; i++) {
>>>>>>> Stashed changes
                _this.onResolvedCallback[i](value);
            }
        }
    }

    function reject(reason) {
        if (_this.status === 'pendding') {
            _this.status === 'rejected';
            _this.data = reason;
            self.data = reason
            for (var i = 0; i < self.onRejectedCallback.length; i++) {
                _this.onRejectedCallback[i](reason);
            }
        }
    }
    if (typeof executor === 'function') {
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }

    } else {
        throw new Error('Promise的构造函数参数类型不是function');
    }
}

_Promise.prototype.resolve = function(value) {
    // 调用then中的回调函数
    const cb = this.queue.shift();
    cb(value);
};

_Promise.prototype.then = function(onResolved, onRejected) {
    const _this = this;
    let promise2;
    onResolved = typeof onResolved === 'function' ? onResolved : function(r) {};
    onRejected = typeof onRejected === 'function' ? onRejected : function(v) {};


    // then 方法总是会返回一个Promise  即具备then方法
    // 将resolve和reject的方法push到响应的队列中去,这里要进行状态判断
    // 因为有可能会在这个promise是resolve状态之后我依然调用then方法，所以这时候就是直接执行then里面的回调函数
    // 所以这里会有三种情况
    // 如果上一个promise直接返回一个不为Promise类型的值，那么这个值直接传递到下一个Promise的resolve函数中
    // 如果返回的是一个Promise,那么这个返回的promise的then方法中的resolve和reject方法就是
    if (_this.status === 'resolved') {
        return promise2 = new _Promise(function(resolve, reject) {
            try {
                // 由于状态已经是resolved，所以这时调用then方法，并不会将回调函数加入到对应的队列中，而是直接执行掉
                var x = onResolved(this.data);
                // 如果返回的x是一个Promise
                if (x instanceof _Promise) {
                    x.then(resolve, reject);
                }
                resolve(x);
            } catch (e) {
                reject(x);
            }

        });
    }
    if (_this.status === 'rejected') {
        return promise2 = new _Promise();

    }
    if (_this.status === 'pendding') {
        return promise2 = new _Promise(function(resolve, reject) {
            console.log(_this);
            // 添加到队列中
            _this.onResolvedCallback.push(function(value) {
                try {
                    var x = onResolved(_this.data);
                    if (x instanceof _Promise) {
                        x.then(resolve, reject);
                    }
                } catch (e) {
                    reject(e);
                }

            });

            _this.onRejectedCallback.push(function(value) {
                try {
                    var x = onRejected(_this.data);
                    if (x instanceof _Promise) {
                        x.then(resolve, reject);
                    }
                } catch (e) {
                    reject(e);
                }
            });

        });
    }
};

const promise = new _Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

promise
    .then((value) => {
        console.log(1, value);
    })
    .then(value => {
        console.log(2, value);
    });