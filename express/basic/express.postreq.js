/* body parser 미들웨어
	
	post 요청 데이터를 추출하는 미들웨어임
	body parser 미들웨어를 사용하면
	request 객체에 body 속성이 부여됨

	form양식 post방식 데이터 추출 해보기
	
*/
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
/*4.x 부터 body parser가 사용되지 않고
body-parser 미들웨어를 설치해야함*/


var app = express();
app.use(bodyParser());

app.get('/post', inputParam);
app.post('/post', postParam);

function inputParam(request,response){
	fs.readFile('inputPostParam.html', function(error, data){
		response.send(data.toString());

	});

}

function postParam(request,response){
	var temp = request.param('temp');
	console.log('temp',temp);

}

http.createServer(app).listen(8888);
console.log('server running 8888');