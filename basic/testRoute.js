var controller = require('./testController');

exports.show = show;

var handle= {};

handle['/'] = controller.main;
handle['/login'] =controller.login;
handle['/list'] =controller.list;
handle['/write'] =controller.write;
handle['/detail'] =controller.detail;
handle['/edit'] =controller.edit;

function show(response, path){
	if(typeof handle[path] === 'function'){
		handle[path](response);
	}else{
		controller.error(response);
	}
}