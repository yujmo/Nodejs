//阻塞：等待文件读取完了再执行其他的代码
var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log(data.toString());

console.log("OK");
