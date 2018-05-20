var express = require('express');

var server = express();

server.use('/a.html', function (req, res) {
  res.send({ a: 1, b: 2 }); // 相比于 write 可以直接返回 json，包含原生所具备的功能，新加了一些功能。
  res.end();
});

server.use('/b.html', function (req, res) {
  res.send('abcd');
  res.end();
});

server.listen(8080);