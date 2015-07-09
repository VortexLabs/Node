var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient; 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log('Got into app.get');
});

io.on('connection', function(socket){
	console.log('New user connected');
});

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on port' + process.env.PORT);
});

MongoClient.connect("mongodb://logan:macsaregay@ds047772.mongolab.com:47772/vortexlabs", function(err, db){
	console.log('Everything is looking A-OK');
	console.log(err);
});
