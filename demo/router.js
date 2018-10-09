var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

function route(pathname, request, response) {
  if (handle[pathname]) {
    handle[pathname](request, response);
  } else {
    response.writeHead(404, 'Not Foundla');
    response.end('Not Found');
  }
  
}

exports.route = route;