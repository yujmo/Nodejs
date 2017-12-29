var http = require("http");
var exec = require("child_process").exec;

function onRequest(request,response){
    var postData = "";
    request.setEncoding("utf-8");
    request.addListener("data",function(postDataChunk){
        postData += postDataChunk;
    });
    request.addListener("end",function(){
        response.writeHead(200,{"Content-Type":"text/plain"});
	var dataObj = JSON.parse(postData);
	text = dataObj.text.replace("!xx","");
	var cmdStr =  "yum install " + text+" -y";
	var cache = "";
	exec(cmdStr,function(err,stdout,stderr){
	    if(err){
		console.log("error");
	    }else
		cache = JSON.stringify(stdout);
	    	console.log("{\"text\":" + cache + "}");
	    	response.end();
	});
    });
};
http.createServer(onRequest).listen(880);
