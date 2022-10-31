var express =require("express");
var http = require('http');
const path =require('path');
var bodyParser =require('body-parser');
var app = express();

var server = http.createServer(app);

 app.set('port',process.env.PORT || 3030);


app.get('/Login',function(req,res){

    res.render(__dirname +'/pages/Login.html')
})

app.get('/Registration',function(req,res){
    res.render(__dirname +'/pages/Registration.html')
})

 app.get('/mainpage',function(req,res){
    res.render(__dirname +'/pages/mainpage.html')
 })

 app.get('/cart',function(req,res){
    res.render(__dirname +'/pages/cart1.html')
 })

app.set('views',__dirname +'/public');
app.use(express.static(path.join(__dirname,'public')));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');


server.listen(app.set('port'),'0.0.0.0',function(){
    console.log('Express  server listening  on port'+app.get('port'));
});

