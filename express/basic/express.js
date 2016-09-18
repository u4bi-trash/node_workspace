/*response 객체의 메서드

 response.send()		매개변수 자료형에 따라 적절한 형태로 응답함
 response.json()		json 형태로 응답
 response.jsonp()	jsonp 형태로 응답

 response.redirect()	웹페이지 경로 강제이동

 send()메서드의 매개변수
 html 문자
 json 배열, 객체

*/
var http = require('http');
var express = require('express');

var app = express();
app.use(onRequest);

function onRequest(request, response){
	var agent = request.header('User-Agent');

	if(agent.toLowerCase().match(/chrome/)){
		response.send('hello chrome');
	}else{
		response.send('hello express');
	}
}

// 서버를 생성 실행
http.createServer(app).listen(8888);
console.log('server running 8888');
