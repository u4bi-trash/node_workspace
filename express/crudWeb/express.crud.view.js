var fs = require('fs');
var ejs = require('ejs');

/* view page info

crud.list.html
crud.detail.html
crud.wirte.html
crud.edit.html
*/

exports.page = function(req,res,filename, tmp,page){

	fs.readFile(filename, 'utf8', function(error, data){
		res.send(ejs.render(data.toString(),{dataArray:tmp, data:page}));

	});
}