var http = require('http');
var querystring = require('querystring');


http.createServer(function(req,res){
	var postHTML =
		'<html><head><meta charset="utf-8"><title>kong</title></head>' +
		'<body>' +
		'<form method="post">' +
		'url： <input name="name"><br>' +
		'<input type="submit">' +
		'</form>' +
		'</body></html>';
	res.writeHeader(200,{'Content-Type':'text/html'});
	res.write(postHTML);
	res.end();
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




}).listen(8887);
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
