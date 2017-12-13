/**
 * @Author JohnLi
 * @Date 2017/12/12 16:11
 */
function a () {
    b();
}

function b () {
    c();
}

function c () {
    d();
}

function d () {
    throw new Error('出错啦');
}

// process.on('uncaughtException', function (e) {
//     console.log('lala');
// });

a();


