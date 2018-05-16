const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
  const file_name = './www' + req.url;
  fs.readFile(file_name, function (err, data) {
    if (err) {
      console.log('404');
    } else {
      res.write(data);
    }
    res.end();
  });
});

// 监听-等着
server.listen(10015, '127.0.0.1');