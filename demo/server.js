var http = require('http');
var url = require('url');

function start(route) {

  var server = http.createServer(function(request, response) {

    var pathname = url.parse(request.url).pathname;

    route(pathname, request, response);
    
  });
  
  server.listen(3000, function () {
    console.log('The server is started on port 3000');
  });

}

exports.start = start;
