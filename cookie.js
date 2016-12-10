var http = require('http');

http.createServer(function (request, response){
	//쿠키입력
	var date = new Date();
	date.setDate(date.getDate()+7);

	response.writeHead(200,{
		'Content-Type'	:'text/html',
		'Set-Cookie'		:[
							'test1 = name1;Expires ='+date.toUTCString(),
							'test2 = name2'
						]
	});
	response.end('<h1>'+request.headers.cookie+'</h1>');
}).listen(8888,function(){
	console.log('서버켜짐 8888');
});