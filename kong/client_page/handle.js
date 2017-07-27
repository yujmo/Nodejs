var http = require('http');
var querystring = require('querystring');

function handle(postData,response,request,postHTML){
    response.writeHead(200,{"Content-type":"text/html"});
    response.write(postHTML);
    cache();
    function cache(){
	
	var options={
	    hostname: '127.0.0.1',
	    port: '8000',
	    path: querystring.parse(postData)["name"],
	    method: 'GET',
	    headers: {
		'Host': 'example.com',
		'apikey': 'ENTER_KEY_HERE'
	    }
	};

	var req = http.request(options,function(res){
	    res.setEncoding('utf8');
	    res.on('data',function(chunk){
		console.log(chunk);
	    });
	});
    
    req.end()
    }
    response.end();
}
exports.handle = handle;

