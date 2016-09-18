/* 소켓통신 클라이언트 정보 저장
	
	클라이언트에 대한 각각의 정보를 저장하는 방법

	정보저장 메서드
		set() 	데이터 저장
		get() 	데이터 추출

	  	socket.set( '키’, ‘값’,function() {});
	   	socket.get(‘키’, function(err,value) {});
	  	socket.del(‘키’, function(err,value) {});

		0.9 이상부터는
		socket 객체에 그냥 넣어서 쓰면 됨
			socket.name
			socket.id
			socket.pwd
			socket.abc

*/

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();

app.get('/log',socket);

function socket(req, res){
	fs.readFile('socket.log.html', function(error, data){
		res.send(data.toString());
	});
}

var server = http.createServer(app).listen(8888);
console.log('server running 8888');


var io = socketio.listen(server);
io.sockets.on('connection', OnPlayerConnect);


function OnPlayerConnect(socket){

	socket.on('giveSetName',function(data){
		setName(socket, data);
	});

	socket.on('giveSetLog',function(data){
		setLog(socket, data);
	});

	socket.on('giveGetName',function(data){
		getName(socket);
	});

	socket.on('giveGetLog',function(data){
		getLog(socket);
	});

}

function setName(socket, data){
	socket.name = data;
	console.log('name:',socket.name);
}

function getName(socket){
	socket.emit('getNameReceive',socket.name);
	console.log('recevie name:',socket.name);
}


function setLog(socket, data){
	socket.pwd = data.pwd;
	socket.regdate = data.regdate;
	console.log('log : %d | %s',socket.pwd, socket.regdate);

}

function getLog(socket){
	var log ={
			pwd: socket.pwd,
			regdate: socket.regdate
		};
	socket.emit('getLogReceive',log);
	console.log('recevie log: %d | %s',log.pwd, log.regdate);

}
