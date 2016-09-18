/*param() 메서드를 사용한 매개변수 파라미터값 추출*/
var http = require('http');
var express = require('express');

var app = express();
app.use(onRequest);

function onRequest(request, response, next){
	//변수 선언
	var name = request.param('name');
	var region = request.param('region');

	//응답
	response.send(name+' and '+region);
}

// 서버를 생성 실행
http.createServer(app).listen(8888);
console.log('server running 8888');

/*http://127.0.0.1:8888/?name=kimo&region=seoul*/
