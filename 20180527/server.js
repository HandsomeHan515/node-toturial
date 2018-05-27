var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.listen(8080);

server.use(bodyParser.urlencoded({
  extended: false, // 扩展模式 true 扩展 false 不扩展
  limit: 2 * 1024 * 1024       // post 数据限制， 默认 100k
}));

server.use('/', function (req, res) {
  // console.log(req.query); // GET
  console.log(req.body);
})

// req.query  // get 无需中间件的支持
// req.body   // post 需要 body-parser 中间件
