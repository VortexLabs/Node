var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log('Got into app.get');
});

//app.use(express.static(__dirname + '/public'));

//app.set('port', process.env.port || 3000); //Checks for available ports, default 3000

//app.use(express.logger('dev'));

/*if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}*/


io.on('connection', function(socket){
	console.log('New user connected');
});


http.listen(process.env.PORT || 5000, function(){
  console.log('listening on port' + process.env.PORT);
});
