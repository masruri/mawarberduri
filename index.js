var express = require('express');
var app = express();

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use('/components',  express.static(__dirname + '/bower_components'));
// routing untuk penggunaan dengan express
app.get('/', function(req,res){
	res.render('index');
});


app.listen(3030);
console.log('aplikasi berjalan di port 3030');
