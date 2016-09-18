var http = require('http');

//쿠키분해

http.createServer(function (request, response){
	// get cookie
	var cook = request.headers.cookie;

	var json= cook.split(';').map(function (element){
		var element = element.split('=');
		return {
			key: element[0],
			value: element[1]
		};
	});

	//set cookie
	response.writeHead(200,{
		'Content-Type'	:'text/html',
		'Set-Cookie'		:[
							'test1 = name1',
							'test2 = name2'
						]
	});

	response.end(JSON.stringify(json));
	

}).listen(8888,function(){
	console.log('서버켜짐 8888');
});