var http = require("http");
var fs = require("fs");
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
/*	
	fs.appendFile("/root/test.txt",text+"\n",'utf8',function(err,data){
	    if (err){
		return console.error(err);	
	    }
	});
*/	
	var cmdStr =  "yum install " + text+" -y";
	var cache = "";
	exec(cmdStr,function(err,stdout,stderr){
	    if(err){
		console.log(cache);
	    }else
		cache = JSON.stringify(stdout);
		console.log(cache);
	    	response.write("{\"text\":" + cache + "}");
	    	response.end();
	});
    });
};
http.createServer(onRequest).listen(880);
