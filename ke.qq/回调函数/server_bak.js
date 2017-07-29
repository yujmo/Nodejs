var http = require('http');

http.createServer(function(request,response){
	//发送HTTP头部
	response.writeHead(200,{"Content-type":"text/html"});
	//返回的数据
	response.write("hello world");

	response.end()
}).listen(5678);
