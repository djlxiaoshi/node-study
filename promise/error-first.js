function foo(cb) {
  setTimeout(() => {
    try {
      // todo
      cb(null, 1);
    } catch (error) {
      cb(error);
    }
    
  }, 0);
}

foo(function(error, value){

});

