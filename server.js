var express = require('express');
var app = express();
var pug = require('pug');
var session = require('express-session');//this is authentication
var morgan = require('morgan'); //middleware
var mongoose = require('mongoose');//database

var configDB = require('./config/database.js');
mongoos.connect(configDB.url);


app.use(morgan('dev')); //morgan logs to the cosole everytime a user send a request
app.use(session({secret:'anysecret',
				saveUninitialized: true,
				resave: true}));

app.set('view engine', 'pug')

app.listen(8080);
console.log("Sever running on port 8080");

app.use('/', function(req, res){
	res.send('Our new app');
	console.log('req.session');
});


