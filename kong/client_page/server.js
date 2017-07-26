var http = require('http');
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

var req = http.request(options,function(res){
	res.setEncoding('utf-8');
	res.on('data',function(chunk){
		console.log(chunk);
	});
	}
);
req.end()
