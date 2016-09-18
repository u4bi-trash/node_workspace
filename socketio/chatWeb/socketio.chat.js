/*소켓 통신 채팅방 */

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');
var ejs = require('ejs');

var app = express();

var roomName=['','서울','경기'];

app.get('/chat',function(req, res){

	fs.readFile('socket.chat.html', 'utf8', function(error, data){
		res.send(ejs.render(data.toString()));
	});

});


var server = http.createServer(app).listen(8888);
console.log('server running 8888');


var io = socketio.listen(server);

var chat = io.of('/chat');
chat.on('connection', OnChatRoomConnect);



function OnChatRoomConnect(chat){
	console.log('채팅방에 접속하셨습니다. (접속자 : %s)',chat.id);

	chat.on('giveSetName',function(data){
		setName(chat, data);
	});

	chat.on('giveSetRoom',function(data){
		setRoom(chat, data);
	});

	chat.on('giveSendMsg',function(data){
		sendMsg(chat, data);
	});

}

function setName(socket, data){
	if(typeof socket.name=="undefined"){
		console.log('%s 닉네임으로 설정하였습니다.', data);
	}else{
		console.log('%s님이 %s 닉네임으로 변경하였습니다.', socket.name, data);
		chat.to(socket.room).emit('setNameReceive',{oldName : socket.name, newName: data});
	}

	socket.name = data;
}

function setRoom(socket, data){
	socket.room = roomName[data];

	socket.join(socket.room);
	console.log('%s님이 %s방을 입장하였습이다.', socket.name, socket.room);

	chat.to(socket.room).emit('setRoomReceive',{name : socket.name, room: socket.room});
}

function sendMsg(socket, data){

	console.log('(%s) %s : %s', socket.room, socket.name, data);
	chat.to(socket.room).emit('sendMsgReceive',{name : socket.name, chat: data});

}
