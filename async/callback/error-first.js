function foo(cb) {
    try {
        // todo
        cb(null, 1);
    } catch (e) {
        cb(e);
    }
}

foo(function (error, value) {
    if (error) {
        console.error('出错啦啦啦啦');
        return;
    }
    
    console.log(value);
});

// function foo(cb) {
//   setTimeout(() => {
//     try {
//       // todo
//       cb(null, params);
//     } catch (error) {
//       cb(error);git
//     }
//
//   }, 0);
// }
