var express = require('express');
var expressStatic = require('express-static');

var server = express();

server.listen(8080);

server.use(expressStatic('./www'));