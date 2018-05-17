const querystring = require("querystring");

let json = querystring.parse('user=han&pass=123');

console.log(json);