var http = require('http');

http.createServer(function (req, res) {
  console.log('req', req)
  res.write('Hello World!');
  res.end();
}).listen(8080);