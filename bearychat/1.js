var http = require("http");

function onRequest(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("{\"text\":\"this is test\"}");
    	response.end();
};
http.createServer(onRequest).listen(880);
