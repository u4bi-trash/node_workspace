/*
	server 객체의 request 이벤트가 발생할때
	이벤트 리스너의 첫번째 매개변수에 requset 객체가 들어감

	request 객체 속성
		method		클라이언트의 요청방식 나타냄
		url			클라이언트가 요청한 url을 나타냄
		headers		요청 메시지 헤더를 나타냄
		trailers	요청 메시지 트레일러를 나타냄
		httpVersion	http 프로토콜 버전을 나타냄

*/
//모듈 추출
var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버를 생성 실행
http.createServer(function (request, response){
	if(request.method=='GET'){
		console.log('get 방식임');
		var que =url.parse(request.url, true).query;

		//get 요청 매개변수 출력
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(JSON.stringify(que));

	}else if(request.method=='POST'){
		console.log('post 방식임');
		request.on('data',function (data){
			console.log('post값',data);
			
		});
	}

}).listen(8888,function(){
	console.log('server running 8888');
	/*	파라미터 확인
		http://127.0.0.1:8888/?name=kimo&age=12
	*/

});