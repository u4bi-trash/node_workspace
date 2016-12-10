var http= require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('test server linux');
	
}).listen(8888,function(){
	console.log('server runnig 127.0.0.1:8888');
});

// server 객체 이벤트 연결
server.on('request', function(){
	console.log('request on');
});

server.on('connection', function(){
	console.log('connection on');
});

server.on('close', function(){
	console.log('close on');
});
