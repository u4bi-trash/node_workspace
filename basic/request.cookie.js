var http = require('http');

http.createServer(function (request, response){
	// get cookie
	var cook = request.headers.cookie;

	//set cookie
	response.writeHead(200,{
		'Content-Type'	:'text/html',
		'Set-Cookie'		:[
							'test1 = name1',
							'test2 = name2'
						]
	});

	response.end(JSON.stringify(cook));
	

}).listen(8888,function(){
	console.log('서버켜짐 8888');
});