//모듈을 추출
var module = require('./module.js');

//모듈을 사용함

console.log('abs(-273)일때 %d', module.abs(-273));
console.log('circleArea(3)일때 %d',module.circleArea(3));
console.log('sum(4,4)일때 %d',module.sum(4,4));