var fs = require('fs');

/*
	readfile
	writefile

				Sync 붙으면 동기적 읽고 쓰기
*/

//readFileSync 동기적으로 읽기
var text =fs.readFileSync('textfile.txt','utf8');
console.log('동기 읽기 :' +text);

//readFile 비동기적으로 읽기

fs.readFile('textfile.txt', 'utf8', function(error,data){
	console.log('비동기 읽기 :' +data);

});

var str='아아라는 글자가 채워지겠지?'

/*writeFileSync 동기적으로 쓰기*/
fs.writeFileSync('testSync.txt', str, 'utf8');
console.log('동기 쓰기 :' +str);

/*writeFile 비동기적으로 쓰기*/
fs.writeFile('test.txt',str, 'utf8', function(error){
	console.log('비동기 쓰기 :'+str);
});


/*예외처리*/

try{
	var tmp =fs.readFileSync('errr.txt','utf8');
	console.log('동기 읽기 :' +tmp);
}catch(e){
	console.log(e);
}