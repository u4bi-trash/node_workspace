/*Socket.io

	
	socket.io 모듈은 웹 소켓 서버를 쉽게 구현할 수 있게 도와주는 모듈임.

	 html5부터 지원함. 익스플로러8 이하에서는 웹 소켓을 사용할수 없음.
	 허나 socket.io 모듈은 자체적인 웹 소켓을 별도로 제공함.
	 현존 웹 대부분에서 사용할 수 있게 됨.

	 socket.io 모듈의 이벤트
	 	connection 클라이언트 연결 성공 이벤트
	 	disconnect 클라이언트 연결 종료 이벤트

	 socket 객체의 메서드
	 	on()		소켓 이벤트 연결
	 	emit() 	소켓 이벤트 발생

*/

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();

app.get('/chat',socket);

function socket(req, res){
	fs.readFile('socket.event.html', function(error, data){
		res.send(data.toString());
	});
}

var server = http.createServer(app).listen(8888);
console.log('server running 8888');





//소켓 서버 생성및 실행
var io = socketio.listen(server);
io.sockets.on('connection', OnPlayerConnect);

function OnPlayerConnect(socket){
	console.log('접속함:',socket.id);
	console.log(socket);
	socket.on('disconnect', discon);
	socket.on('aaa',give); // 통신주기 순서2
}


function discon(){
	console.log('퇴장함');
}

function give(msg){ // 통신주기 순서3
	console.log('aaa:',msg);
	io.emit('bbb', msg);
}
