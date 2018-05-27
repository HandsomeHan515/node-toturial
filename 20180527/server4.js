var express = require('express');
var bodyParser = require('./lib/my-body-parser');

var server = express();

server.listen(8080);

server.use(bodyParser());

server.use('/', function (req, res) {
  console.log(req.body);
});
