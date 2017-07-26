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

function onRequest(request,response){
	var postHTML =
		'<html><head><meta charset="utf-8"><title>kong</title></head>' +
		'<body>' +
		'<form method="post">' +
		'url： <input name="name"><br>' +
		'<input type="submit" ><br>' +
		'</form>' +
		'</body></html>';
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(postHTML);
	response.end();
}
http.createServer(onRequest).listen(8887);

function GET(options){ 
	var req = http.request(options,function(res){
		res.setEncoding('utf-8');
		res.on('data',function(chunk){
			console.log(chunk);
		});
		}
	);
	req.on('error',function(err){
		console.error(err);
	});
	req.end()
}
