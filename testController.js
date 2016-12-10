var fs = require('fs');
var module = require('./testModule');

exports.main = main;
exports.login=login;
exports.list=list;
exports.write=write;
exports.detail=detail;
exports.edit=edit;
exports.error = error;


function main(response){
	var tempName=2;
	view(response,'testMain.html');
}

function login(response){
	view(response,'testLogin.html');
}

function list(response){
	view(response,'testList.html');
}

function write(response){
	view(response,'testWrite.html');
}

function detail(response){
	view(response,'testDetail.html');
}

function edit(response){
	view(response,'testEdit.html');
}

function error(response){
	view(response,'testError.html');
}

function view(response,file){
	fs.readFile(file,function (error, data){
		
		response.writeHead(200, {'Content-Type':'text/html'});
		response.write(data);

		response.end();
		console.log('dd');
	});
}