//모듈 추출
var http = require('http');
var url = require('url');
var route = require('./testRoute');


function onRequest(request, response){
	var path = url.parse(request.url).pathname;
	route.show(response,path);

	console.log('bbs');
}

// 서버를 생성 실행
http.createServer(onRequest).listen(8888);
console.log('server running 8888');
