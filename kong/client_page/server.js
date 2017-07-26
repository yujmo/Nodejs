var http = require('http');
var url = require('url');

function start(postHTML){
    function onRequest(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(postHTML);
	var pathname = url.parse(request.url).pathname;
	response.write(pathname);
	response.end();
    }
    http.createServer(onRequest).listen(8887);
}

exports.start = start;
