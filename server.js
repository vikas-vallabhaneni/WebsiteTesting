const dotenv = require('dotenv').config()
var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var fs = require("fs");
const bcrypt = require('bcrypt')
const path = require('path');
const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session')
const initializePassport = require (path.join(__dirname, 'public/javascripts/passport-config'));
const { ServerResponse } = require('http');
const methodOverride = require('method-override')
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)

);
const pathToDataFile = path.join(__dirname, 'public', 'files', 'data.txt');
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

// reads the file and populates assignmentEntries array
fs.readFile(pathToDataFile, 'utf-8', (err, data) => {
    assignmentEntries = data.split("\r\n");
})

// loads home page
server.get("/", function(req, res){
    res.render("index.ejs");
})

















server.get("/", function(req, res){
    res.send("2:45")
})

server.listen(process.env.PORT || 3000)