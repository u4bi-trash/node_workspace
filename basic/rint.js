//EventEmitter 객체생성
exports.timer = new process.EventEmitter();

exports.tickCount=0;

// 이벤트 강제로 발생
exports.tickTimer = setInterval(function(){
	exports.timer.emit('tick');
},1000);