var server = require('./server');
var route = require('./route');
var handle = require('./handle');

var postHTML =
	'<html><head><meta charset="utf-8"><title>kong</title></head>' +
	'<body>' +
	'<form method="post">' +
	'url： <input name="name"><br>' +
	'<input type="submit" ><br>' +
	'</form>' +
        '</body></html>';

server.start(postHTML,route.route,handle.handle);



