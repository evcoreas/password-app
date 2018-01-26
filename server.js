var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');//native module in express that resolves paths
var session = require('express-session');//this is authentication
var morgan = require('morgan'); //middleware
var bodyParser = require('body-parser');
var mongoose = require("mongoose");//to make mongodb work better
mongoose.connect("mongodb://localhost:27018/user_app");//port 2018 only on erika's
app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(morgan('dev')); //morgan logs to the console everytime a user send a request
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'anysecret',
                saveUninitialized: true,
                resave: true,
                }));
app.listen(8080);
console.log("SERVER IS LISTENING on 8080!");
/////////////////////////////////////////////////////////////////////////////
var userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String
});
var User = mongoose.model("User", userSchema); //complied it to a model
// this is our homepage. 
app.get('/index', function(req, res) {
    res.render('index.ejs')
});
//page number 2
app.get( '/mainpage', function(req, res) {
    res.render('mainpage.ejs')
});
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
app.get('/users', function(req,res){
    //get the users from the data base
     var user = User.find({}, function(err, user){
    //renders the user file 
    res.render('users.ejs', {user: user}) //user on the left is the variable name in ejs file 
                                         //user on the right is the varibale name in this file 
    });
    
});