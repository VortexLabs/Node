window.onload = function(){

	document.getElementById("insert").onclick = function(){
		socket.emit("insertChat");
	};



};