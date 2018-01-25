var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');//native module in express that resolves paths
app.use(express.static('public'))
var session = require('express-session');//this is authentication
var morgan = require('morgan'); //middleware
// var mongoose = require('mongoose');//database

// var configDB = require('./config/database.js');
// mongoose.connect(configDB.url);


app.use(morgan('dev')); //morgan logs to the console everytime a user send a request
app.use(session({secret:'anysecret',
				saveUninitialized: true,
				resave: true}));

app.set('view engine', 'ejs');

app.listen(8080);
console.log("Sever running on port 8080");

// app.use('/', function(req, res){
// 	res.send('Our new app');
// 	console.log('req.session');
// });


// this is our homepage. 
app.get('/index', function(req, res) {
	res.render('index.ejs')
	res.redirect('/signup')

});

//page number 2
app.get( '/mainpage', function(req, res) {
	res.render('mainpage.ejs')

});

//page number3
app.get('/signup', function(req, res) {
	res.render('signup.ejs')
});

