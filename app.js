var express=require('express');
var exphbs=require('express-handlebars');
var route=require('./routes/route.js');
var app=express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.get('/',route.home);
app.get('/:city',route.city);

var port = process.env.PORT || 8080;
var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
