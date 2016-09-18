var manager = require('./express.crud.manager.js');

exports.index = function(req, res){
	var page=req.param('page');

	manager.selectAll(req, res,page);
}

exports.show = function(req, res){
	var id = req.param('id');
	manager.select(req,res, id);
	
}

exports.create = function(req, res){
	if(req.method=='GET'){
		manager.write(req,res);

	}else if(req.method=='POST'){
		var name = req.param('name');
		var pwd = req.param('pwd');

		manager.create(req,res, name, pwd);
	}
	
}

exports.update = function(req, res){

	var id = req.param('id');
	
	if(req.method=='GET'){
		manager.edit(req,res,id);

	}else if(req.method=='PUT'){
		var name = req.param('name');
		var pwd = req.param('pwd');
	
		manager.update(req,res, id, name, pwd);

	}
	
}

exports.destory = function(req, res){
	var id = req.param('id');

	manager.destory(req,res, id);
}
