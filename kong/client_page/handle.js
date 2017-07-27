var http = require('http');
var querystring = require('querystring');

function handle(postData,response,request,postHTML){
    response.writeHead(200,{"Content-type":"text/html"});
    response.write(postHTML);
    function cache(){
	var option={
		hostname: '127.0.0.1',
		port: '8000',
		path: querystring.parse(postData)["name"],
		method: 'GET',
		headers: {
    			'Host': 'example.com',
    			'apikey': 'ENTER_KEY_HERE'
		}
	};
	temp = ""; 
	
	var req = http.request(options,function(res){
		res.setEncoding('utf8');
		res.on('data',function(chunk){
			temp = chunk;
		});
	});
	req.end()
    }
    response.write(cache);
    response.end();
}
exports.handle = handle;

