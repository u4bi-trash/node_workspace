/* static 미들웨어
	
	static 미들웨어는 웹 서버에서 손쉽게 파일을 제공하는 방법임

	static 미들웨어를 사용하면 지정한 폴더에 있는
	내용을 모두 웹 서버 루트 폴더에 올림

	따라서 img 태그의 src속성에 /src/imgs 가 아닌
	바로 이미지 파일명을 입력하여 사용함
*/

var http = require('http');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/src/imgs'));

app.use(midware1);

function midware1(request, response){
	response.send('<img src="/logo.png" width="100%" />');

}

http.createServer(app).listen(8888);
console.log('server running 8888');