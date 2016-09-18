/* Express 프레임워크 Restful CRUD

*/

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var board = require('./express.crud.board.js');

var app = express();


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/user/new',board.create);
app.post('/user',board.create);

app.get('/user',board.index);
app.get('/user/:id',board.show);

app.get('/user/:id/edit',board.update);
app.put('/user/:id',board.update);

app.del('/user/:id',board.destory);


http.createServer(app).listen(8888);
console.log('server running 8888');