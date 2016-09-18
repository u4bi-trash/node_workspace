/* 소켓 통신 종류
	
	broadcast	자신 제외 모든 유저 데이터 전달

*/

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();

app.get('/chat',socket);

function socket(req, res){
	fs.readFile('socket.type.broadcast.html', function(error, data){
		res.send(data.toString());
	});
}

var server = http.createServer(app).listen(8888);
console.log('server running 8888');



//소켓 서버 생성및 실행

var io = socketio.listen(server);
io.sockets.on('connection', OnPlayerConnect);

function OnPlayerConnect(socket){

	socket.on('giveBroadcast',function(data){
		broadcastType(socket, data);
		
	});

}

function broadcastType(socket, msg){
	console.log('브로드캐스트:',msg);
	socket.broadcast.emit('broadcastReceive', msg);
}