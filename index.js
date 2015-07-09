var express = require('express');
var app = express(); 
var consolidate = require('consolidate');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.port || 3000;

//app.use(express.static(__dirname + '/public'));

app.set('port', process.env.port || 3000); //Checks for available ports, default 3000

server.listen(port, function(){
	console.log('Port listening');
});

io.on('connection', function(socket){
	console.log('New user connected');
});



