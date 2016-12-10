//모듈 추출 url 모듈
var url = require('url');

/*  모듈의 메서드들
	parse(str,bool)	: URL 문자열을 URL 객체로 변환해 리턴함
	format(urlObj)	: URL 객체를 URL 문자열로 변환해 리턴함
	resolve(from,to)	: 매개변수를 조합하여 완전한  URL 문자열을 생성해 리턴함

	이 메서드중 자주 사용하는건 parse()
		이건? 매개변수로 url 문자열을 입력하면 url을 분해하여 객체로 만들어줌
*/

// 모듈을 사용함

var parseObject1 = url.parse('http://www.hanb.co.kr/trackback/978-89-7914-874-9');
console.log(parseObject1);

/*쿼리 스트링 모듈은 유용한데 url 모듈에 기능이 통합되어 있
어잘 사용안함

쿼리 출력함 위에껀 쿼리 출력안함*/
console.log(url.parse('http://www.hanb.co.kr/book/look.html?isbn=978-89-7914-874-9',true));
