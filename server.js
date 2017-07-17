var http = require("http")
function start(){
    function onRequest(request,response){
	console.log("Request received.");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started.");
}

exports.start=start;






/*
=====================================================================
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world");
    response.end();
}).listen(8888);
=====================================================================
*/
