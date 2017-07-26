var server = require('./server');

var postHTML =
	'<html><head><meta charset="utf-8"><title>kong</title></head>' +
	'<body>' +
	'<form method="post">' +
	'url： <input name="name"><br>' +
	'<input type="submit" ><br>' +
	'</form>' +
        '</body></html>';


server.start(postHTML);



