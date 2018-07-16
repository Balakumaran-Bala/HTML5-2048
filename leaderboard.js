var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, '/public')))

app.listen(8080, function() {
	console.log("Server listening on 8080");
});
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extendeed: true}));

// app.post('/leaders', function(req, res) {
// 	console.log(req.body.data);
// 	//res.send();
// });

// app.listen(8080, function() {
// 	console.log('Server listening at 8080');
// });

//http://127.0.0.1:8080/
/*
var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mydb'
});

con.connect(function(err) {
	if (err) throw err
	console.log("Connected!");
	var sql = CREATE TABLE customers
	con.query("CREATE DATABASE mydb", function(err, result) {
		if (err) throw err
		console.log("Database created!");
	});
});
*/