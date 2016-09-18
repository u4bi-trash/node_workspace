console.log('이건 뭐? : %d',273);
console.log('%d + %d = %d',23,24,23+24);

//문자열

console.log('문자열 : %s','dfdf아아');

/*제이슨*/

console.log('제이슨 : %j',{name: '김코딩공부'});


//시간측정 시작
console.time('alpha');

var output =1;
for (var i = 0; i < 30; i++) {
	output = i;
	console.log('리절트값:',output);

}

console.timeEnd('alpha');

console.log('\u001b[35m', 'node js');
console.log('\u001b[0m', 'node js');