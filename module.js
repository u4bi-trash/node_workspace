//절대값을 구하는 메서드임 이건

exports.abs = function (number){
	if(0 < number){
		return number;
	}else{
		return -number;
	}
};

// 원의 넓이를 구하는 메서드임 이건
exports.circleArea = function (radius){
	return radius * radius * Math.PI;
};

exports.sum = function(num1, num2){
	return num1+num2;
};

/*생성한 모듈을 다른 자바스크립트 파일에서 추출할때

require() 함수를 사용함.

exports.js 파일처럼 코드를 입력

방금 생성한 module 모듈은
abs() 메서드와 circleArea() 메서드를 갖고있음

모듈마냥 사용할 수 있음

*/
