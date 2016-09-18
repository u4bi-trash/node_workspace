//모듈 추출
var http = require('http');
var fs = require('fs');

// 서버를 생성 실행
http.createServer(function (request, response){
	if(request.method=='GET'){
		console.log('get 방식임');

		fs.readFile('request.post.html',function (error,data){
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);

		});

	}else if(request.method=='POST'){
		console.log('post 방식임');
		request.on('data',function (data){
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);

		});
	}

}).listen(8888,function(){
	console.log('server running 8888');
	/*	파라미터 확인
		http://127.0.0.1:8888/?name=kimo&age=12
	*/

});