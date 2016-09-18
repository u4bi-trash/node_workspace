/*미들웨어 개요 

use() 메서드는 여러번 사용할 수 있음.
이때 user() 매개변수에는 request response next 형태의 함수 입력해야함
매개변수 next는 다음에 위치하는 함수를 의미함 아래 코드에 설명*/

var http = require('http');
var express = require('express');

var app = express();

app.use(midware1);
app.use(midware2);
app.use(midware3);

function midware1(request, response, next){
	console.log('첫번째 미들웨어');
	next();
}

function midware2(request, response, next){
	console.log('두번째 미들웨어');
	next();	
}

function midware3(request, response, next){
	console.log('세번째 미들웨어');
	
	response.send('good');

}

// 서버를 생성 실행
http.createServer(app).listen(8888);
console.log('server running 8888');

/*요청의 응답이 완료하기 전까지 요청 중간중간에
서여러가지 일을 처리할 수 있음

그래서 use() 메서드의 매개변수에 입력하는 함수를
미들웨어(middleware)라고함

이걸 왜쓰냐?

미들웨어에서 request 객체와 response 객체에 속성 또는 메서드를
추가하면 다음 미들웨어에서 추가한 속성과 메서드를 사용할 수 있음

express4.js 참조
*/