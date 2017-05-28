//need express
let express = require('express');
let debug = require('debug')('test');
//server
let app = express();
//maybe need body parser
let bodyParser = require('body-parser');
let time = require('./time.js');
let port = process.env.Port || 8080;
//use parser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.get(['/:time','/'], function(req,res){
  res.sendFile(__dirname + "./index.html");
  let data = req.params;

  if (data.time != undefined){
      res.json(time.checkString(data.time));
  }
  //console.log(data.time == undefined);
//December 15, 2015 test case

});



//localhost:3000
app.listen(port, function(){
  debug("listening on " + port);
});
