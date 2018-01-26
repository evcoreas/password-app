var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');//native module in express that resolves paths
var session = require('express-session');//this is authentication
var morgan = require('morgan'); //middleware
var bodyParser = require("body-parser")

var mongoose = require("mongoose"); ////mongoose is telling node.js to connect with the mongodb database
mongoose.connect("mongodb://localhost:27018/user_app");//port 2018 only on erika's mac


app.use(morgan('dev')); //morgan logs to the console everytime a user send a request
app.use(session({secret:'anysecret',
				saveUninitialized: true,
				resave: true}));
app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(8080);
console.log("Sever running on port 8080");

var userSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	email: String
});

var passwordSchema = new mongoose.Schema({
	website: String,
	username: String,
	password: String,
})

var User = mongoose.model("User", userSchema); //mongoose is an object data mapper. complied it to a model
//where the jave script is interacting with the database
//where we take the schema and complies it into a model which returns an object that has  
//a lot of the methods that we use to create or find data from the database
var Password = mongoose.model("Password", passwordSchema);



// app.use('/index', function(req, res){
// 	console.log('req.session');
// });


// this is our homepage. 
app.get('/index', function(req, res) {
	res.render('index.ejs')

});

//page number 2
app.get( '/mainpage', function(req, res) { 
	var passwords = Password.find({}, function(err, passwords){
	//renders the user file 
	res.render('mainpage.ejs', {passwords: passwords})

})
})

//signp page render
app.get('/signup', function(req, res) {
	res.render('signup.ejs')
});

app.post('/newUser', function(req,res){

    User.create({
        fname: req.body.firstName,
        lname: req.body.lastName,
        email: req.body.email
    })
    res.redirect('/users')
});


	User.create({
		fname: req.body.firstName,
		lname: req.body.lastName,
		email: req.body.email
	})

})

// app.get('/users', function(req,res){
// 	//get the users from the data base
// 	 var user = User.find({}, function(err, user){
// 	//renders the user file 
// 	res.render('users.ejs', {user: user}) //user on the left is the variable name in ejs file 
// 										 //user on the right is the varibale name in this file 
// 		})
// 	})

app.post('/newPassword', function(req,res){
	Password.create({
		website: req.body.website,
		username: req.body.user,
		password: req.body.password
	})
	res.redirect('/mainpage')
});
