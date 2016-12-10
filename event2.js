/*노드js에서 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속을 받
음지금까지 살펴본 process객체도 EventEmitter 객체의 상속을 받기 때문에
이벤트를 연결할 수 있는 것임

EventEmitter 객체는 process 객체 안에 있는

생성자 함수로 생성할 수 있는 객체임

EventEmitter 객체의 메서드

addEventListener(eventName, eventHandler) 	이벤트 연결
on(eventName, eventHandler) 					이벤트 연결
setMaxLlisteners(limit)						이벤트 연결 개수 조절

removeListener(eventName, handler)			특정 이벤트의 이벤트 리스너 제거
removeAllListeners([[eventName])				모든 이벤트 리스너를 제거함
once(eventName, eventHandler)				이벤트를 한번만 연결함

*/
/*원래 EventEmitter 객체는 events 모듈 안에 들어 있었지만
편하게 사용하고자 process 객체안에도 추가 되었음*/

//EventEmitter 객체생성
var custom = new process.EventEmitter();

//이벤트 연결
custom.on('tick',function(){
	console.log('이벤트 실행');
})

//이벤트 강제로 발생시킴
custom.emit('tick');
