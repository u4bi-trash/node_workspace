var fs= require('fs');
var http= require('http');

//웹 서버를 생성하고 실행함
http.createServer(function (request, response){
	//HTML 파일 읽기
	fs.readFile('HTMLPage.html', function(error, data){
		response.writeHead(200,
			{'Content-Type' : 'text/html'}
		);
		response.end(data);
		console.log('html 로드함');
	});

}).listen(8888,function(){
	console.log('서버 켜짐 8888');
});