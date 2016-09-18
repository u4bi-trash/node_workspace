/* Request 모듈

	request 모듈에서 꼭 알아야 할 것은 3가지임
	post get jar 3가지임.

	jar는 쿠키를 저장하는 것임.
	로그인과정을 거친 후 접근해야하는 필요성이 있을때 사용됨.
	
	request 모듈은 post와 get이 지원 됨.

	*/

var request = require('request');

request.get({url: 'http://www.daum.net'}, function(err, response, body){
	console.log(body);
	// 해당 웹의 body단 모두 출력

});