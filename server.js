// need npm install express ejs body-parser bcrypt --save
// need npm install passport passport-local express-session express-flash method-override --save
// used npm install -g nodemon

const dotenv = require('dotenv').config()

// declare variables
var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var fs = require("fs");
const bcrypt = require('bcrypt')
const path = require('path');
const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session')
const initializePassport = require ('./passport-config');
const { ServerResponse } = require('http');
const methodOverride = require('method-override')
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)

);
// string variable representing path to data.txt file
const pathToDataFile = path.join(__dirname, '..', 'files', 'data.txt');
const PORT = process.env.port || 3000;
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.json({limit: "1mb"}))
server.use(flash())
server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
server.use(passport.initialize())
server.use(passport.session())
server.use(methodOverride('_method'))
// array to hold assignment entries
var assignmentEntries;
// array to hold user information
const users = []


server.get("/", function(req, res){
    res.send("Hello World 3:54 pm!")
})

server.listen(process.env.PORT || 3000)