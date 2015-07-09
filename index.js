var express = require('express');
var app = express(); 
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.ports || 3000;

app.set('port', port); //Checks for available ports, default 3000

server.listen(port, function(){
	console.log('Port listening');
});

io.on('connection', function(socket){
	console.log('New user connected');
});



