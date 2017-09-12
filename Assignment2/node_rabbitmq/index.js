const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
var request = require('request')
//for rabbitmq
var amqp = require('amqplib/callback_api');


//for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// code to make connection to sqlite
let db = new sqlite3.Database('./db/AddItem', (err) => {
	if(err){
		console.error(err.message);
	}
	console.log('Connected to SQlite database.');
});

db.serialize(function() {
	var sql = 'SELECT item_name,quantity from Items';
	
     db.all(sql, function(err, rows) {
      if(err) {console.log(err)}
      	items = rows
    });

});


db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});



// calling python microservice to calculate price of added item. Send data to python microservice.
var add_item_send= function (req, res) {

  amqp.connect('amqp://localhost', function(err, conn) { 
       conn.createChannel(function(err, ch) {
    		var q = 'hello';
    		
	    	ch.assertQueue(q, {durable: false});
    		
   			ch.sendToQueue(q, new Buffer(JSON.stringify(items)));
    		console.log(" [x] Sent %s", JSON.stringify(items));
			res.json({msg : "Message Sent!  --->"+JSON.stringify(items)});
  		});
     });
  };


app.get('/sendnode/',[add_item_send]);

var receive= function (req, res) {

  amqp.connect('amqp://localhost', function(err, conn) { 
       conn.createChannel(function(err, ch) {
    		var mqueue = "";
	        var amqp = require('amqplib/callback_api');
    		var q= 'hello';
	    	console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
	    	ch.assertQueue(q, {durable: false});
    		
   			ch.consume(q,function(msg)
   			{
   				console.log(" [x] Received "+ msg.content.toString());
   				mqueue += msg.content.toString();
      		    console.log("Printing mqueue -->"+mqueue);	
      			res.json({msg : "Message Received!  ---->"+mqueue});
      			setTimeout(function() { conn.close()}, 500);

   			},{noAck:true});
    		console.log(" Print message outside", mqueue);
			
  		});
     });
  };


 app.get('/receivenode/',[receive]);


//server listens on port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})