var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(request, response){
	response.send('<h1>Hello, Butter and Express!</h1>');
});

port = '9001';

http.listen(port, function(){
	console.log('listening on *:'+port);
});
