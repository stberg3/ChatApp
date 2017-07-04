var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port_number = '9001';

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('Oh look, a user connected!');

	socket.on('chat message', function(message){
		io.emit('chat message', message);
	});

	socket.on('disconnect', function(){
		console.log('Zey disconnected!');
	});
});

http.listen(port_number, function(){
	console.log('listening on *:'+port_number);
});
