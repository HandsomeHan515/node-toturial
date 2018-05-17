const http = require('http');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  var get = {};

  if (req.url.indexOf('?') != -1) {
    var arr1 = req.url.split('?')[1];
    get = querystring.parse(arr1);
  } else {
    var url = req.url;
  }

  console.log(get);

});

server.listen(8080, '127.0.0.1');
