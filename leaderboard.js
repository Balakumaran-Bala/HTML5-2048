var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendeed: true}));
app.use(express.static(path.join(__dirname, '/public')))

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mydb'
});

con.connect(function(err) {
	if (err) throw err
	console.log("Connected to MySQL!");
});

app.post('/score', function(req, res) {
	console.log(req.body);
})

app.post('/', function(req, res) {
	var name = req.body.name;
	var sql = "INSERT INTO players (name, score) VALUES (?, 10)";

	con.query(sql, name, function(err, result) {
		if (err) throw err
		console.log("Succesfully inserted!");
	});
});

app.listen(8080, function() {
	console.log("Server listening on 8080");
});
