const http = require('http');
const urllib = require('url');

const server = http.createServer(function (req, res) {
  var get = {};

  if (req.url.indexOf('?') != -1) {
    get = urllib.parse(req.url, true).query;
  } else {
    var url = req.url;
  }

  console.log(get);

});

server.listen(8080, '127.0.0.1');
