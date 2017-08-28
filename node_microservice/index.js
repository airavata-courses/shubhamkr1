const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
var request = require('request')

var items;

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



app.get('/AddItem', function (req, res) {

  var request = require("request");
  request("http://localhost:5000/calculate/items="+JSON.stringify(items), function(error, response, body) {
    if (error) console.log(error);
    else {
      console.log(response);
    }
  });


  console.log(request);
 });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})