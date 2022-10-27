var express =require("express");
var http = require("http");
const path = require("path");
var app = express();

app.set('port', process.env.PORT || 3000);

var server = http.createServer(app);

app.get('/',function(req,res){
    res.render(__dirname + '/pages/index.html');
})

app.set('views',__dirname + '/public');
app.use(express.static(path.join(__dirname,'public')));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

console.log('hi');

// -----------------------------------------------------------------

server.listen(app.set('port'),'0.0.0.0',function(){
    console.log('Express server listening on port' +app.get('port'));
});
