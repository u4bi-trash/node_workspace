var util = require('util');

/*util의 메서드

	format() 매개변수로 입력한 문자열을 조합해 리턴시킴

	format 메서드는 3장에서 살펴봄 콘솔로그 메서드와 비슷함
	콘솔로드 메서드와 차이점이라면 출력하지 않고 문자열을 반환하는 것임

*/

var data = util.format('%d+%d =%d',52,273,52+273);

console.log(data);

