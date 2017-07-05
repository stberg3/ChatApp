var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// login groundwork
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const config = require('config');

var port_number = '9001';

app.use(session({
	store: new RedisStore({
		url: config.redisStore.url
	}),
	secret: config.redisStore.secret,
	resave: false,
	saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

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
