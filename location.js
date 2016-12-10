var http = require('http');

http.createServer(function (request, response){
	//쿠키입력
	var date = new Date();
	date.setDate(date.getDate()+7);

	response.writeHead(302,{'Location':'http://naver.com'});
	response.end();
}).listen(8888,function(){
	console.log('서버켜짐 8888');
});

/* http status code 예
	1xx		처리중			100continue
	2xx		성공				200 ok
	3xx		리다이렉			300 multiple choices
	4xx		클라이언트 오류	400 bad request
	5xx		서버 오류			500 internal server error

*/