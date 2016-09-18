/* 소켓통신 룸

*/

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();

app.get('/name',socket);

function socket(req, res){
	fs.readFile('socket.room.html', function(error, data){
		res.send(data.toString());
	});
}

var server = http.createServer(app).listen(8888);
console.log('server running 8888');


var io = socketio.listen(server);

var koreaspace = io.of('/koreaspace');

koreaspace.on('connection', OnKoreaSpaceConnect);


function OnKoreaSpaceConnect(socket){
	console.log('코리아 네임스페이스 접속함');

	socket.on('giveSetRoom',function(data){
		setRoom(socket, data);

	});

	socket.on('giveGetRoom',function(data){
		getRoom(socket, data);

	});

	socket.on('giveLeaveRoom',function(data){
		leaveRoom(socket, data);

	});

}

function setRoom(socket, data){
	socket.room = data;
	socket.join(socket.room);
	console.log('room:', socket.room);
	
	/* socket이 접속되면 data에 든 룸으로 들어가게 됨
	*/
}

function getRoom(socket, data){
	koreaspace.to(socket.room).emit('getRoomReceive',socket.room);
	console.log('receive room:', socket.room);
	
	/*이후 위와 같은 방식으로 통신
	*/
}

function leaveRoom(socket, data){
	socket.leave();
	socket.room="";
	console.log('reave room:', socket.room);
	
	/* 끊을때는 socket.leave만 하면 됨.
	*/
}


