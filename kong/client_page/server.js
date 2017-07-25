var http = require('http');
var request = require('request');
/*
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8887);
console.log('Server running at http://127.0.0.1:8888/');
*/

var options={
	hostname: "http://localhost",
	port: 8000,
	path: '/2',
	method: 'GET'
}


var req=http.request(options,function(res){
	console.log(res);

})


