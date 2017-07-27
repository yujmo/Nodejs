var http = require('http');

function start(postHTML,route,handle){
    function onRequest(request,response){
	var postData = "";
	request.addListener("data",function(postDataChunk){
	    postData += postDataChunk;
	});
	
	request.addListener("end",function(){
	    route(postData,handle,response,request,postHTML);
	});
    }
    http.createServer(onRequest).listen(8887);
}

exports.start = start;
