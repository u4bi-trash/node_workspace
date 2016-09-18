/* 소켓 통신 종류
	

	3가지로 나눠짐
	public		자신 포함 모든 유저 데이터 전달
	broadcast	자신 제외 모든 유저 데이터 전달
	private		특정 유저 데이터 전달
	
	유저 이벤트 -> 서버에서 3가지 유형 구별후 emit -> 유저 이벤트

*/

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();

app.get('/chat',socket);

function socket(req, res){
	fs.readFile('socket.type.html', function(error, data){
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

	socket.on('givePublic', publicType);
	socket.on('giveBroadcast',function(data){
		broadcastType(socket, data);

	});

	socket.on('givePrivate', function(data){
		console.log('%d번에게 보냄 (내용: %s)',data.id, data.msg);
		privateType(userList[data.id], data.msg);

	});
}

function publicType(msg){
	console.log('퍼블릭:',msg);
	io.sockets.emit('publicReceive', msg);
}

function broadcastType(socket, msg){
	console.log('브로드캐스트:',msg);
	socket.broadcast.emit('broadcastReceive', msg);
}

function privateType(id, msg){
	console.log('프라이빗: %s | %s',id, msg);
	io.sockets.sockets[id].emit('privateReceive', msg);
}