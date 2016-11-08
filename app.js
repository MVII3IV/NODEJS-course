var express = require("express");

var app = express();

var port = 80;

app.use(express.static('public'));
app.set('views', './src/views');


var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname : ".hbs"}));

app.set("view engine", ".hbs");



app.get('/ejs', function(req, res){
    res.render('index',{title: 'hello form render'});
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});



