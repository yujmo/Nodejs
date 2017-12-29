var http = require("http");
var fs = require("fs");

function onRequest(request,response){
    // get request
    var postData = "";
    request.setEncoding("utf-8");
    request.addListener("data",function(postDataChunk){
        postData += postDataChunk;
    });
    request.addListener("end",function(){
        response.writeHead(200,{"Content-Type":"text/plain"});
	var dataObj = JSON.parse(postData);
	text = dataObj.text.replace("!xx","");
	fs.appendFile("/root/test.txt",text+"\n",'utf8',function(err,data){
	    if (err){
		return console.error(err);	
	    }
	});
	fs.readFile("/root/test.txt",'utf8',function(err,data){
	    console.log(data);
        });
    });
};
http.createServer(onRequest).listen(880);
