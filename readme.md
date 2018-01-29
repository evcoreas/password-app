# Vault Master

## About Vault Master
is an interactive app that allows the user to store their very own passwords.
 
The idea of this app is to allow users to:

1. Login to their accounts and then head to the passwords dedicated 
page where they will store a password of their choosing. 

2. The app also allows the user to enter the title of where the password is coming from to help organize their passwords. 

3. There is also a sign up page for new users to signup for an account to start storing their passwords. 

To store user passwords, we are using packages MongoDB and Mongoose in our server.js file. 


##Usage
======

To use this app, you would need to clone the repository and run server.js in your console. 
Once it's up and running, you can head over to http://localhost:8080/index to login or sign up for an 
account. 

Once you signup, your information will be added to the database and you can freely start using the passwords page to add your very own passwords. 

##Dependencies
=============
1. npm init
2. npm init install --save express
3. npm init install --save ejs
4. npm init install --save mongoose
5. npm init install --save body-parser
6. npm init install --save morgan
