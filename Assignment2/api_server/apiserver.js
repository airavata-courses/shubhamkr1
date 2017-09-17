var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var amqp = require('amqplib/callback_api');

// to parse post request

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// CORS

// This allows client applications from other domains use the API Server
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.set('port', process.env.PORT || 20000);


// Handles http requests for the home page
app.get('/', function(req, res){
	res.send('');
});


// get string from UI and
// send string to node service
var add_item= function (req, res) {
          
  var str= JSON.stringify(req.query);
  console.log(str);
  amqp.connect('amqp://localhost', function(err, conn) { 
       conn.createChannel(function(err, ch) {
        var q = 'api_node';
        
        ch.assertQueue(q, {durable: false});
        
        ch.sendToQueue(q, new Buffer(str));
        console.log(" [x] Sent %s", str);
        //res.send("Message Sent to node!  --->"+ str);
      });
     });


  amqp.connect('amqp://localhost', function(err, conn) {
  			conn.createChannel(function(err, ch) {
  				var q = 'java_api';
			   	//ch.assertQueue(q, {durable: true});
    			console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
   				ch.consume(q, function(msg) {
      				console.log(" [x] Received %s", msg.content.toString());
      				msg_q += msg.content.toString();
      				console.log("Printing msg_q -----------------"+msg_q);	
      				res.json({msg : "Message Received!  ------------->"+msg_q});
      				setTimeout(function() { conn.close()}, 500);
    			}, {noAck: true});
    			console.log("Printing msg_q outside-----------------"+msg_q);
    			
  			});
	});

  
  };



app.get('/apigateway/',[add_item]);

app.listen(app.get('port'),function() {
	console.log('Server  listening on port 20000!')
});