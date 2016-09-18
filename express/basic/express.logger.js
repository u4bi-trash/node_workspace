/* morgan 미들웨어
	
	morgan 미들웨어는 웹 요청이 들어왔을 때 로그를 출력하는 미들웨어임
	원래 3.x 버전에선 express.logger() 쓰면되었으나
	4.x 버전 거듭되면서 지원 안함

	따라서 morgan 모듈 설치하여 사용해야함

	morgan 미들웨어의 기본 형식

	default : combined
	short
	tiny


	dev
*/

var http = require('http');
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.use(morgan(':method + :date'));

app.use(morgan('tiny'));

app.use(morgan('short'));

app.use(morgan('dev'));




app.use(midware1);

function midware1(request, response){
	response.send('af');

}

// 서버를 생성 실행
http.createServer(app).listen(8888);
console.log('server running 8888');

/*morgan 미들웨어의 토큰 
	
	:토큰

	req[header] 요청 헤더를 나타냄
	res[header] 응답 헤더를 나타냄
	http-version HTTP 버전을 나타냄
	response-time 응답 시간을 나타냄
	remote-addr 원격 주소를 나타냄
	date[format]요청 시간을 나타냄
	method 		요청 방식을 나타냄
	url			요청 url을 나타냄
	referrer	이전 url을 나타냄
	User-Agent	사용자 에이전트를 나타냄
	status		상태 코드를 나타냄
	
*/