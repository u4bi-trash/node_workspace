var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

function onRequest(request, response){
	fs.readFile('testPage.u4bi', 'utf8',function(error, data){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(ejs.render(data));

	});
}

// 서버를 생성 실행
http.createServer(onRequest).listen(8888);
console.log('server running 8888');
