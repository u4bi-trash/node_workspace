/*Express 프레임워크 Restful CRUD
		
		Mysql

*/

var mysql = require('mysql');
var view = require('./express.crud.view.js');

/* 데이터베이스 연동*/
var client = mysql.createConnection({
	user: 'root',
	password: 'root1595321',
	database: 'nodejs'

});


exports.selectAll = function(req, res,page){

	client.query('select id, name from userlog',
		
		 function (error, row, fields){
			if(error) return console.log('쿼리 문장에 오류가 있음.');	
			view.page(req,res,'crud.list.html',row,page);
		}

	);
	console.log('모든 로그의 정보를 불러옵니다.');
}

exports.select = function(req, res, id){
	client.query('select * from userlog where id =?',
		[id],

		function (error, low, fields){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			view.page(req,res,'crud.detail.html',low);

		}

	);
	console.log('%d번 로그의 정보를 불러옵니다.',id);
}

exports.write = function(req, res){
	view.page(req,res,'crud.write.html');
	console.log('작성 페이지를 엽니다.');
}

exports.create = function(req, res, name, pwd){
	client.query('insert into userlog (name, pwd) values(?,?)',
		[name,pwd],

		function (error, result){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			res.redirect('/user/'+result.insertId);
		}

	);
	console.log('로그를 생성합니다. (생성정보 : name : %s | pwd : %d)',name,pwd);

}

exports.edit = function(req, res,id){
	client.query('select * from userlog where id =?',
		[id],

		function (error, low, fields){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			view.page(req,res,'crud.edit.html',low);
		}

	);
	console.log('수정 페이지를 엽니다.');

}

exports.update = function(req, res, id, name,pwd){
	client.query('update userlog set name=?, pwd=? where id=?',
		[name,pwd,id],

		function (error, result){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			res.redirect('/user/'+id);
		}

	);
	console.log('%d번 로그의 정보를 수정합니다. (변경정보 : name : %s | pwd : %d)',id, name,pwd);

}

exports.destory = function(req, res, id){
	client.query('delete from userlog where id=?',
		[id],

		function (error, row, fields){
			if(error) return console.log('쿼리 문장에 오류가 있음.');
			res.redirect('/user');
		}

	);
	console.log('%d번 로그의 정보를 삭제합니다.',id);

}
