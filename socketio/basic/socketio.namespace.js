/* 소켓통신 네임스페이스

*/

var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();

app.get('/name',socket);

function socket(req, res){
	fs.readFile('socket.namespace.html', function(error, data){
		res.send(data.toString());
	});
}

var server = http.createServer(app).listen(8888);
console.log('server running 8888');


var io = socketio.listen(server);

var koreaspace = io.of('/koreaspace');

koreaspace.on('connection', OnKoreaSpaceConnect);


function OnKoreaSpaceConnect(koreaspace){
	console.log('접속함');

	/*	이 namespace를 통해
		기존 소켓과 동일하게 통신을 주고 받을 수 있음.*/
}
