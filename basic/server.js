//모듈 추출
var http= require('http');

//웹 서버실행

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('nodejs server linux 한글아 나와라');
}).listen(8888,function(){
	console.log('ㅎㅎ server running at http://127.0.0.1:8888/');
});