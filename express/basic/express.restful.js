/* RESTful 웹 서비스 개발

	Restful 웹 서비스는
	REST(REpresentational Status Transfer)
	규정에 맞춰 만든 웹 서비스를 의미함.

	REST 규정이란?
		일관된 웹 서비스 인터페이스 설계를 위한 규정임.

	RESTful 웹 서비스의 구조

		경로			/collection		/collection/:id
		GET 방식		컬렉션 조회		컬렉션의 특정 요소 조회
		POST 방식	컬렉션 추가		사용하지 않음
		PUT 방식		컬렉션 전체변경	컬렉션 특정요소 수정
		DELECT 방식	컬렉션 전체삭제	컬렉션 특정요소 삭제


	RESTful 웹 서비스
	GET		/user		모든 사용자 정보조회
	GET		/user/:id 	특정 사용자 정보조회
	POST	/user		사용자 추가
	PUT		/user/:id	특정 사용자 정보수정
	DELETE	/user/:id	특정 사용자 정보제거

*/
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser());

app.get('/user',selectAll);
app.get('/user/:id',select);

app.post('/user',create);
app.put('/user/:id',edit);
app.del('/user/:id',remove);

function selectAll(req, res){

}

function select(req, res){
	var id = req.param('id');
	res.send(id);
}

function create(req, res){

}

function edit(req, res){
	var id = req.param('id');
	res.send(id);
}

function remove(req, res){
	var id = req.param('id');
	res.send(id);
}

http.createServer(app).listen(8888);
console.log('server running 8888');
