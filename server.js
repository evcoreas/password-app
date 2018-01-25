var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');//native module in express that resolves paths
var bodyParser = require('body-parser');
var session = require('express-session');//this is authentication
var morgan = require('morgan'); //middleware

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app");
// var mongoose = require('mongoose');//database

// var configDB = require('./config/database.js');
// mongoose.connect(configDB.url);


app.use(morgan('dev')); //morgan logs to the console everytime a user send a request
app.use(session({secret:'anysecret',
				saveUninitialized: true,
				resave: true}));
app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

app.listen(8080);
console.log("Sever running on port 8080");
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema); //complied it to a model

var george = new Cat({
	name: "George",
	age: 11,
	temperment: "Grouchy"
});

george.save(function(err, cat){
	if(err){
		console.log("SOMETHIBNG WENT WRONG!")
	} else {
		console.log("We just saved a cat to the DB:")
		console.log(cat);
	}
});






// app.use('/index', function(req, res){
// 	res.send('Our new app');
// 	console.log('req.session');
// });


// // this is our homepage. 
// app.get('/index', function(req, res) {
// 	res.render('index.ejs')
// 	// res.redirect('/signup')

// });

// //page number 2
// app.get( '/mainpage', function(req, res) {
// 	res.render('mainpage.ejs')

// });

// //page number3
// // app.use('/signup', function(req, res){
// // 	res.render('signup.ejs')
// // });
// app.get('/signup', function(req, res) {
// 	res.render('signup.ejs')
// });

// app.post('/newUser', function(req,res){
	
// 		req.body.firstName,
// 		lname: req.body.lastName,
// 		email: req.body.email
// 	}
// 	res.redirect('/users')

// })
// app.get('/users', function(req,res){
// 	res.render('users.ejs')
// })