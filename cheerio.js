/* Cheerio 모듈
	

	웹 스크래핑 모듈
		웹스크래핑이란 웹페이지 정보를
		프로그램을 통해서 가져옴을 뜻함.

	구현을 위해선 Request 모듈과 Cheerio 모듈이 사용됨.

	request 모듈은 인터넷에 요청보냄 
	그 후 해당 페이지를 가져옴

	cheerio 모듈은 받아온 페이지를 파싱하여
	필요한 특정 부분의 정보만을 가져옴
	
*/

var request = require('request');
var cheerio = require('cheerio');

var url ={url: 'http://www.tistory.com'};
request.get(url, function(error, response, body){
	var $ = cheerio.load(body);

	var arr = $('.tistory_recomm').children('.recomm_blog').children('.tit_subject');
  	
  	for(var i=0; i<arr.prevObject.length; i++){
  		console.log(arr.prevObject[i].children[0].next.children[3].children[0].data);
  	}

})