const fs = require('fs');

// fs.readFile();
// fs.writeFile();

fs.readFile('1.txt', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log(data.toString());
  }
});

fs.writeFile('2.txt', 'eee', function (err) {

});