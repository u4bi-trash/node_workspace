/* 소켓 통신 종류
	
	private		특정 유저 데이터 전달
*/

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();

app.get('/chat',socket);

function socket(req, res){
	fs.readFile('socket.type.private.html', function(error, data){
		res.send(data.toString());
	});
}

var server = http.createServer(app).listen(8888);
console.log('server running 8888');



//소켓 서버 생성및 실행

var tick=0;
var userList = [];

var io = socketio.listen(server);
io.sockets.on('connection', OnPlayerConnect);

function OnPlayerConnect(socket){

	userList.push(socket.id);
	console.log('%d번 접속자: %s ',tick, userList[tick]);
	tick++;

	socket.on('givePrivate', function(data){
		console.log('%d번에게 보냄 (내용: %s)',data.id, data.msg);
		privateType(userList[data.id], data.msg);

	});
}

function privateType(id, msg){
	console.log('프라이빗: %s | %s',id, msg);
	io.sockets.sockets[id].emit('privateReceive', msg);
}