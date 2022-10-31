var express =require("express");
var http = require('http');
const path =require('path');
var bodyParser =require('body-parser')
var app = express();
app.use(bodyParser.json({

    limit: '50mb'

}));



app.use(bodyParser.urlencoded({

    limit: '50mb',

    extended: true

}));



app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database:'userdb'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.set('port',process.env.PORT || 3020);

var server = http.createServer(app);

// app.get('/',function(req,res){
//     res.render(__dirname +'/pages/LoginPage.html')
// });
// var cerdits = [{username:'Prasad',password:'12345'},{username:'Dinesh',password:'12345678'},{username:'Chirag',password:'123456789'},{username:'Amiya',password:'1234567890'}];

//     if(username!== undefined && username !== 'undefined' && username.length != 0 && username !== '' && 
//     password !== undefined && password.length!=='undefined' && password.length !== 0 && password !== ''){
//         let i;
//         for(i= 0; i<cerdits.length;i++){
//             console.log(i)
//             if((username==cerdits[i].username) && (password == cerdits[i].password)){
//                 console.log(cerdits[i].username,cerdits[i].password)
//                 res.sendStatus(200);    //ok
//             }
//             // else{

//         }
//         if (i == cerdits.length) {
//             console.log('validation error')
//             res.sendStatus(501);    //server responded with error status of 500
//         }
//     }
//     else{
//         console.log('Error : data is undefined')
//         res.sendStatus(500)
//     }


/*Inserting data from server with using postman */

app.post('/addUser',(req,res) =>{
    // res.render(__dirname +'/pages/LoginPage.html')
    console.log({req})
    var user_email = req.body.user_email
    var user_password = req.body.user_password
    var user_otp =req.body.user_otp
    console.log(user_email)
    console.log(user_password)
    console.log(user_otp)

/*insert table from server*/

var sql = "INSERT INTO User (UserName,UserPassword,UserOTP) VALUES ('"+user_email+"','"+user_password+"','"+user_otp+"')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted")
  res.sendStatus(200);
});
})

/*updaing data from server using postman  */
app.post('/updateUser',(req,res) =>{


    var user_email = req.body.user_email
    var user_password = req.body.user_password
    var ID =req.body.ID
    // var user_otp =req.body.user_otp



    var sql = "UPDATE User  SET UserName = '"+user_email+"',UserPassword='"+user_password+"' WHERE ID ="+ID+"";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
      res.sendStatus(200)
    });
  });

/*---Update end here--- */

/*Deleting data */
app.post('/deleteUser',(req,res) =>{

    console.log({req})
    var user_email = req.body.user_email
    var user_password = req.body.user_email
    var user_otp =req.body.user_otp
    console.log({user_email})


    
        var sql = "DELETE FROM User";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
          res.sendStatus(200)
        })

    })

/*---Deleting data end-- */

/*--Fetching data */
app.post('/FetchUser',(req,res)=>{
    console.log({req})
    con.query("SELECT * FROM User", function (err, result,) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
})
/*--Fetching data */

app.set('views',__dirname +'/public');
app.use(express.static(path.join(__dirname,'public')));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');


server.listen(app.set('port'),'0.0.0.0',function(){
    console.log('Express  server listening  on port'+app.get('port'));
});
