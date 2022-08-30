// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
require('dotenv').config();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/", (req,res)=>{
  var date = new Date();
  res.json({"unix":Date.parse(date), "utc":date.toGMTString()})
})

app.get("/api/:date", (req,res)=>{
  data = req.params.date;
  var date = new Date(+data);
  var unixDate = Date.parse(data);
 
  if(date.toGMTString() == 'Invalid Date' && new Date(+unixDate) == 'Invalid Date'){ res.json({ error : "Invalid Date" })}
 
  //Se a data for em unix
   else if(!unixDate){
    res.json({"unix":Number(data), "utc":date.toGMTString()})
  
  } else{
    var date2 = Date.parse(data);
    var convertedData =  new Date(+date2);
    res.json({"unix":Date.parse(data), "utc":convertedData.toGMTString()})
  }
  
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
