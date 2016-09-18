/* 	따라서 미들웨어를 사용하면 특정한 일을 수행하는 모듈을
	분리해서 만들 수 있음.

*/

var http = require('http');
var express = require('express');

var app = express();

app.use(midware1);
app.use(midware2);

function midware1(request, response, next){
	console.log('첫번째 미들웨어');
	num1 = 52;
	num2= 273;

	next();
}

function midware2(request, response, next){
	console.log('두번째 미들웨어');

	response.send(num1+' and '+num2);
}

// 서버를 생성 실행
http.createServer(app).listen(8888);
console.log('server running 8888');

/*

그런데 다음과 같은 생각하는 사람 있을 수 있음.
그냥 하나에 모두 입력하면 안되나요? 귀찮게 왜 분리해서 쓰나?

express 모듈은 다양한 모듈을 가지고 있음.

	express 모듈의 미들웨어

	logger				로그정보 출력
	csrf				CSEF 보안수행
	basicAuth			기본적인 인증수행
	bodyParser			post 요청 매개변수 추출 
	cookieParser		쿠키 분해 
	session				세션처리 수행 
	methodOverride		다양한 요청방식 수행할수있게함 
	responseTime		응답 시간 계산
	router				페이지 라우트를 수행함 
	staticCache			static 미들웨어를 위한 메모리 캐시층 생성 
	static 				특정 폴더를 서버의 루트 폴더에 올림
	directory			서버의 디렉토리 구조를 보여줌 
	vhost				가상 호스트를 설정함 
	favicon				파비콘을 생성함
	limit				post 요청의 데이터를 제한함
	errorHandler		예외 처리를 수행함
	
*/