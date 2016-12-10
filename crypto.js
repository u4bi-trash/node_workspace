var crypto = require('crypto');

/* crypto 모듈은 해시 생성과 암호화를 수행하는 모듈임
	간단하게 흐름만 알기

	일반적으로 프로그래밍 안에서 해시라는 말이 나오면 크게 두가지 의미가 담김
	1. 키와 값을 갖는 자료형 : 대표적으로 자바스크립트의 객체가 해시임
	2. 전자 지문 			: 지금부터 살펴보는 내용임

*/

//해시생성
var shasum = crypto.createHash('sha1');
shasum.update('crypto_hash');

var output = shasum.digest('hex');

//출력함
console.log('crypto_hash', output);


console.log('------------------------------------');

var key = '';
var input = 'testpassword';

/*암호화*/
var cipher = crypto.createCipher('aes192',key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192',key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

/*출력*/
console.log('원래 문자열 	: '+input);
console.log('암호화 		: '+cipheredOutput);
console.log('암호화 해제 	: '+decipheredOutput);

