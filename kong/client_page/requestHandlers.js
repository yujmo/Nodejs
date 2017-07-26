var http = require('http');

function getAPIs(pathname){
    var options = {
	hostname: '127.0.0.1',
	port: '8000',
	path: pathname,
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
    });
    req.on('error',function(err){
	console.error(err);
    });
    req.end()
} 

exports.getAPIs = getAPIs;
