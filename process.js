/*
process 객체

process 객체는 프로그램과 관련된 정보를 나타내는 객체임.
웹 브라우저에서 작동하는 자바스크립트에 존재하지 않는 node.js만이
가진 객체임

process객체와 관련된 필요한 내용은 이책 전체에 걸쳐 알아볼 것임
이 절에서는 가장 기본적인 내용만 살펴보음겠음

이절에서 살펴볼 process 객체의 속성과 메서드는 표 3-6과 표 3-7임

argv : 실행 매개변수를 나타냄
env 컴퓨터 환경과 관련된 정보를 나타냅니다.
arch 프로세서의 아기텍쳐를 나냄ㅂ니다.
platform 플랫폼을 나타냄

*/

// process.argv

process.argv.forEach(function (item, index){
	//출력함
	console.log(index+' : '+typeof(item) + ' : ', item);

	// 실행 매개변수에 --exit가 있을 때
	if(item == '--exit'){
		//다음 매개변수를 얻음
		var exitTime = Number(process.argv[index + 1]);

		//일정 시간 후 프로그램 종료됨
		setTimeout(function(){
			console.log('서버가 꺼집니다.');
			process.exit();
		}, exitTime);

	}	
});
