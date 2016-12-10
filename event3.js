/*모듈 추출*/
var rint = require('./rint');

//이벤트 연결
rint.timer.on('tick', function(){
	var tick = rint.tickCount++;
	console.log('기름 주유중 %dL',tick);
	 if(tick==5){
	 	clearInterval(rint.tickTimer);
	 	console.log('기름이 모두 채워졌습니다.');
	 }
});