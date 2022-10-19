var express =require("express");
var http = require('http');
const path =require('path');
var app = express();

app.set('port',process.env.PORT || 3005);

var server = http.createServer(app);

app.get('/read',function(req,res){
    res.render(__dirname +'/pages/index.html')
});

app.get('/Form',function(req,res) {
    res.render(__dirname +'/pages/Form.html')
    
})

app.set('views',__dirname +'/public');
app.use(express.static(path.join(__dirname,'public')));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');


server.listen(app.set('port'),'0.0.0.0',function(){
    console.log('Express  server listening  on port'+app.get('port'));
});