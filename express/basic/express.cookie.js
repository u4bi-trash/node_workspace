/* cookie parser 미들웨어

	cookie parser 미들웨어는 요청 쿠키를 추출하는 미들웨어임
	
	cookie parser 미들웨어를 사용하면
	request 객체에 cookies 속성이 부여됨.

*/

var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
/*4.x 부터 express.cookieParser()가 사용되지 않음
따라서 이걸 씀 cookie-parser 모듈
*/

var app = express();

// 4.x 부터 사용하지 않음 app.use(express.cookieParser());

app.use(cookieParser());

app.get('/setCookie', setCookie);
app.get('/getCookie', getCookie);


function setCookie(request,response){

	//쿠키 생성
	response.cookie('string','cookie');

	response.cookie(
		'json',{
			name:'cookie',
			property:'delicious'
		}
	);

	response.cookie('team','cook',{
		maxAge:6000,
		secure:true
	});

	response.redirect('/getCookie');
}

function getCookie(request,response){
	response.send(request.cookies);

}

http.createServer(app).listen(8888);
console.log('server running 8888');

/*cookie() 메서드의 옵션 속성
httpOnly : 클라이언트의 쿠키 접근 권한을 지정함
secure : secure 속성 지정
expires : expires 속성 지정
maxAge : 상대적으로 expires 속성을 지정함 유지시간 60*1000 =1분
path : path 속성을 지정함

api 정보 없고 사용용도는 잘모르겠음
https://github.com/expressjs/cookie-parser

*/

