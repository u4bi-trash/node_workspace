/* session 미들웨어

쿠키(cookie)는 정보를 클라이언트의 pc에 저장
세션(session) 은 정보를 서버에 저장하는 기술임.

세션은 클라이언트에 세션 식별자 쿠키를 부여함.

부여한 세션 식별자 쿠키와 대응되는 데이터를
서버에 위치하는 별도 저장소에 저장함.

session 미들웨어는 세션을 쉽게 생성할 수 있게 도와주며
request 객체에 session속성을 부여함.

자체적으로 cookie parser 미들웨어를 사용하므로
cookie-parser 미들웨어와 session 미들웨어가
순서대로 추가되어야 함.


*/
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');


var app = express();

app.use(cookieParser());
app.use(session({
	secret:'secret key',
	key:'rint'
	
}));

app.use(saveSession);

function saveSession(request,response){
	var output = {};

	output.cookies = request.cookies;
	output.session = request.session;

	request.session.abc = 'good';

	response.send(output);

}

http.createServer(app).listen(8888);
console.log('server running 8888');

/*session() 메서드의 옵션

	key : 쿠키의 name 속성을 지정한다.
	store : 세션 저장소를 지정한다.
	cookie : 생성할 cookie와 관련된 정보를 지정함

session 객체의 메서드

	regenerate() 세션을 다시 생성함
	destroy() 세션 제거
	reload() 세선을 다시 불러옴
	save() 세션을 저장함

*/