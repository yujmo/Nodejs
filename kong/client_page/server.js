var http = require('http');
var url = require('url');

http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname; 
    response.writeHead(200,{'Content-Type':'text/html'});
    
    response.end();
}).listen(8887);

console.log("Server is running at http://192.168.171.130:8887");
