var express = require('express');
var request = require('request');

var app = express();

// CORS
// This allows client applications from other domains use the API Server
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.set('port', process.env.PORT || 20000);


// Handles http requests for the home page
app.get('/', function(req, res){
	res.send('');
});


// calling node microservices
var add_item= function (req, res) {

  request("http://localhost:3000/nodejs", function(error, response, body) {
    if (error) console.log(error);
    else {
      console.log(response.body);
      res.send(response.body);
    }
    
  });
 };


app.get('/apigateway/',[add_item]);

app.listen(app.get('port'),function() {
	console.log('Server  listening on port 20000!')
});