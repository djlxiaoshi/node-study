/**
 * @Author JohnLi
 * @Date 2017/12/12 16:35
 */

function a() {
    b();
}

function b() {
    c(cb);
}

function c(callback) {
    setTimeout(callback, 0)
}

function cb() {
    throw new Error('出错啦');
}

a();