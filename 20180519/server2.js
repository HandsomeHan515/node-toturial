var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var urllib = require('url');

var server = http.createServer(function (req, res) {
  var obj = urllib.parse(req.url, true);
  var url = obj.pathname;
  var get = obj.query;

  // post
  var str = '';
  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {
    var post = querystring.parse(str);

    /**
     * url 所需要的数据
     * get get数据
     * post post数据
     */

    console.log(url, get, post);

    // 文件请求
    var file_name = './www' + url;
    console.log(file_name);
    fs.readFile(file_name, function (err, data) {
      console.log(err, data);
      if (err) {
        res.write('404');
      } else {
        res.write(data);
      }
      res.end();
    });
  });
});

server.listen(8080);