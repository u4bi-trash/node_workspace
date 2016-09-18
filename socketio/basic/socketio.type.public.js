/* 소켓 통신 종류
	

	3가지로 나눠짐
	public		자신 포함 모든 유저 데이터 전달

*/

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();

app.get('/chat',socket);

function socket(req, res){
	fs.readFile('socket.type.public.html', function(error, data){
		res.send(data.toString());
	});
}

var server = http.createServer(app).listen(8888);
console.log('server running 8888');



//소켓 서버 생성및 실행

var io = socketio.listen(server);
io.sockets.on('connection', OnPlayerConnect);

function OnPlayerConnect(socket){
	socket.on('givePublic', publicType);

}

function publicType(msg){
	console.log('퍼블릭:',msg);
	io.sockets.emit('publicReceive', msg);
}
