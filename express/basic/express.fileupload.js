/* connect-multpart 미들웨어
	
웹 브라우저는 파일을 전송할 때
multipart/form-data 인코딩 방식을 사용함.

4.x부터 multipart 미들웨어가 제거되어
bodyParser 미들웨어의 multipart 기능이 불가능 해짐

따라서 대체수단으로
connect-multiparty 미들웨어를 설치해야함


	파일 업로드 해보기
	
*/
var fs = require('fs');
var http = require('http');
var express = require('express');
var multiparty = require('connect-multiparty');


var app = express();


// 4.x부터 사용안함 app.use(bodyParser({uploadDir:__dirname + '/src/imgs'}));
app.use(multiparty({uploadDir:__dirname+'/src/imgs'}));


app.get('/file', fileUpload);
app.post('/file', fileSaveDefault); //파일저장 기본
//app.post('/file', fileSaveRename); //파일저장및 이름변경


function fileUpload(request,response){
	fs.readFile('inputFileUpload.html', function(error, data){
		response.send(data.toString());
	});

}

function fileSaveDefault(request,response){
	console.log(request.body);
	console.log(request.files);
	response.redirect('/file');

}

function fileSaveRename(request,response){
	var iname = request.param('iname');
	var image = request.files.image;
	
	var name = image.name;
	var path = image.path;

	var outputPath = __dirname+'/src/imgs/'+iname;
	
	fs.rename(path, outputPath, function(error){
		response.redirect('/file');
		console.log('[%s] 파일을 [%s]로 변경하여 저장하였습니다.',name,iname);
	});

}

http.createServer(app).listen(8888);
console.log('server running 8888');
