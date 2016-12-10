/* process 객체에 exit 이벤트를 연결함*/

/*이벤트 연결 메서
	on(eventName, eventHandler)	이벤트 연결함

*/

process.on('exit', function(){
	console.log('on메서드 종료');

});

/*process 객체에 uncaughtException 이벤트 연결*/
process.on('uncaughtException', function(error){
	console.log('uncaught 예외발생');

});

/*2초 간격으로 3번 예외를 발생시킴*/
var tick = 0;
var idx = setInterval(function(){
	/*횟수를 증가시킴*/
	tick++;
	//3번 실행하면 타이머가 중지됨
	if(tick===5){
		clearInterval(idx);
	}

	/*예외를 강제로 발생시킴*/
	error.error.error();
}, 2000);
