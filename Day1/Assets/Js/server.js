const express = require("express");
// const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();

// import exp from express;

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
// app.use(bodyParser.json());
// app.use(cors());
// app.options('*', cors());
  
// /** POST API **/
// app.post("/post_api", (req, res) => {
//     console.log('POST API');
//     console.log(req.body);


//     res.send(req.body);
// })

// /** GET API **/
// app.get("/get_api", function (req, res){
//     console.log('GET API');
//     res.sendStatus(200);
// })
  
app.listen(3007, function(){
  console.log("server is running on port 3007");
})
console.log('hi')