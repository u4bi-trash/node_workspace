/* router 미들웨어
	router 미들웨어는 페이지 라우팅을 구현하는 미들웨어임
	페이지 라우팅은 클라이언트 요청에 적절한 페이지 제공하는 기술임.

*/

var http = require('http');
var express = require('express');

var app = express();

/*
4.x버전부터 사용되지 않음 바로 get(), post()로 사용함
app.use(app.router);
*/

//라우터 설정
app.get('/', routerMain);

app.get('/a', routerA);
app.get('/b', routerB);
app.get('/c/:id', routerC);

app.all('*', routerError);


//라우터 함수
function routerMain(request, response){
	response.send('main');
}

function routerA(request, response){
	response.send('a');
}

function routerB(request, response){
	response.send('b');
}

function routerC(request, response){
	var name = request.param('id');
	response.send(name);

}

function routerError(request, response){
	response.send('error');
}

http.createServer(app).listen(80);
console.log('server running 80');