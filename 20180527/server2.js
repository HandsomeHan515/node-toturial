var express = require('express');

var server = express();

server.listen(8080);

server.use('/', function (req, res, next) {
  console.log(1);
  next()
});

server.use('/', function (req, res) {
  console.log(2);
});
