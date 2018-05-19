var http = require('http');
var querystring = require('querystring');

http.createServer(function (req, res) {
  var str = '';
  // data 有数据到达的时候就会发生一次
  var i = 0;
  req.on('data', function (data) {
    console.log('times', i++);
    str += data;
  });
  // 数据全部到达后触发
  req.on('end', function () {
    var post = querystring.parse(str);
    console.log(post);
  });
}).listen(8080);