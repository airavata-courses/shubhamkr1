var express = require('express');

var app = express();


var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/static'));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 20000);


// Handles http requests for the home page
app.get('/', function(req, res){
	res.send('');
});

//node service
app.get('http://localhost:3000/', function(req,res){
	res.send('');
});

//python microservice
app.get('http://localhost:5000/', function(req,res){
	res.send('');
});

//java spring microservice
app.get('http://localhost:8080/', function(req,res){

});


app.listen(app.get('port'),function() {
	console.log('Server  listening on port 20000!')
});
