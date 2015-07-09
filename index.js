var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient; 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log('Got into app.get');
});

app.use(express.static(__dirname + '/public'));

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on port' + process.env.PORT);
});

MongoClient.connect("mongodb://logan:macsaregay@ds047772.mongolab.com:47772/vortexlabs", function(err, db){
	console.log('Everything is looking A-OK');
	console.log(err);

	io.on('connection', function(socket){
		console.log('New user connected');
		socket.on('insertChat', function(){
			db.collection("Chat").insert({_id: Math.random(), name: "logan", email: "logan@vortexlabs.net"});
		});
	});
});


