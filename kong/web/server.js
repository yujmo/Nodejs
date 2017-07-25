var express = require('express');
var app = express();
var fs = require('fs');

app.get('listUsers',function(req,res){
    fs.readFile(__dirname + "/" + "users.json",'utf8',function(err,data){
	console.log(data);
	res.end(data);
})

app.get('/:id',function(req,res){
    fs.readFile(__dirname + "/" + "users.json",'utf8',function(err,data){
	data = JSON.parse(data);
	var user = data["user" + req.params.id];
	console.log(user);
	res.end(JSON.stringify(user));
    });
})
    
var server = app.listen(8888,function(){
    console.log("Server has started. ");
});
