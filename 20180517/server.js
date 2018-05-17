const http = require('http');

const server = http.createServer(function (req, res) {
  var get = {};

  if (req.url.indexOf('?') != -1) {
    var arr1 = req.url.split('?');
    var arr2 = arr1[1].split('&');

    arr2.map(item => {
      var arr3 = item.split('=');
      get[arr3[0]] = arr3[1];
    });
    console.log(get);
  } else {
    var url = req.url;
  }

});

server.listen(8080, '127.0.0.1');