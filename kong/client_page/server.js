var http = require('http');

/*
var options = {
	hostname: '127.0.0.1',
	port: '8000',
	path: '/listusers',
	method: 'GET',
	headers: {
		'Host': 'example.com',
		'apikey': 'ENTER_KEY_HERE'
	}
}
*/

function onRequest(request,response,postHTML){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(postHTML);
	response.end();
}
http.createServer(onRequest).listen(8887);
