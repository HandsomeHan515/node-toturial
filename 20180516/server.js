var http = require('http');

var server = http.createServer(function (req, res) {
  switch (req.url) {
    case '/1.html':
      res.write('111');
      break;
    case '/2.html':
      res.write('222');
      break;
    default:
      res.write('404');
  }
  res.end();
});

// 监听-等着
server.listen(10015, '127.0.0.1');