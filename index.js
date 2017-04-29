var express = require('express');
var app = express();

app.set('view engine','pug');

// routing untuk penggunaan dengan express
app.get('/', function(req,res){
	res.send('hallo kelompok mawarberduri');
});


app.listen(3030);
console.log('aplikasi berjalan di port 3030');
