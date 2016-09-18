/*mysql 연동

	CRUD

*/

var mysql = require('mysql');

/* 데이터베이스 연동*/
var client = mysql.createConnection({
	user: 'root',
	password: 'root1595321',
	database: 'u4bi'

});

///* test

selectAll();
//select(1);
//create('ez', 1234);
//edit(1, '420days','1234');
//remove(1);

//*/


function selectAll(){
	client.query('select * from userlog',selectAllSQL);
	console.log('모든 로그의 정보를 불러옵니다.');

}

function select(id){
	client.query('select * from userlog where id =?',
		[id],	selectSQL);
	console.log('%d번 로그의 정보를 불러옵니다.',id);

}

function create(name, pwd){
	client.query('insert into userlog (name, pwd) values(?,?)',
		[name,pwd],	createSQL);
	console.log('로그를 생성합니다. (생성정보 : name : %s | pwd : %d)',name,pwd);

}

function edit(id, name,pwd){
	client.query('update userlog set name=?, pwd=? where id=?',
		[name,pwd,id],	updateSQL);
	console.log('%d번 로그의 정보를 수정합니다. (변경정보 : name : %s | pwd : %d)',id, name,pwd);

}

function remove(id){
	client.query('delete from userlog where id=?',
		[id],	deleteSQL);
	console.log('%d번 로그의 정보를 삭제합니다.',id);

}



function selectAllSQL(error, result, fields){
	if(error) return console.log('쿼리 문장에 오류가 있음.');
	console.log(result);

}

function selectSQL(error, result, fields){
	if(error) return console.log('쿼리 문장에 오류가 있음.');
	console.log(result);

}

function createSQL(error, result, fields){
	if(error) return console.log('쿼리 문장에 오류가 있음.');
	console.log(result);

}

function deleteSQL(error, result, fields){
	if(error) return console.log('쿼리 문장에 오류가 있음.');
	console.log(result);

}

function updateSQL(error, result, fields){
	if(error) return console.log('쿼리 문장에 오류가 있음.');
	console.log(result);

}
