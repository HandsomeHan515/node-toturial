var urllib = require('url');

var obj = urllib.parse('http://www.handsomehan.cn/flowers/?id=10&name=han', true);

console.log(obj.pathname, obj.query);