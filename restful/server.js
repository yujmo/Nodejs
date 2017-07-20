var express = require('express');
var app = express();
var fs = require('fs');

var user = {
    "user4" : {
	"name" : "mohit",
	"password" : "password4",
	"profession" : "teacher",
	"id": 4
    }
};

app.get('/addUser',function(req,res){
    fs.readFile(__dirname + "/" + "users.json",'utf8',function(err,data){
	data = JSON.parse(data);
	data["user4"] = user["user4"];
	console.log(data);
	res.end(JSON.stringify(data));
	});
})

function onRequest(req,res){
    fs.readFile(__dirname + "/" + "users.json",'utf8',function(err,data){
	console.log(data);
	res.end(data);
    });
}

app.get('/listUsers',onRequest);

var server = app.listen(8888,function(){
    console.log("Server has started. ");
});
