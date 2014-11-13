var fs = require('fs');

var filePath = './testtextfile.txt';

var contents = fs.readFileSync(filePath).toString();

console.log(contents);
