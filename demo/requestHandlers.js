
var queryString = require('querystring'),
  formidable = require('formidable'),
  util = require('util'),
  fs = require('fs');

function start (request, response) {

  var body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" enctype="multipart/form-data" '+
  'method="post">'+
  '<input type="file" name="upload" multiple="multiple">'+
  '<input type="submit" value="Upload file" />'+
  '</form>'+
  '</body>'+
  '</html>';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(body);

}

function upload (request, response) {
  var form = new formidable.IncomingForm();

  form.parse(request, function(err, fields, files) {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('received upload:\n\n');
    response.end(util.inspect({fields: fields, files: files}));
  });
}

function show(request, response) {
  fs.readFile('./test.jpg', function(error, file) {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write(error + '\n');
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(file, 'binary');
      response.end();
    }



  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
