//const dotenv = require('dotenv').config()
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


/*
const { ServerResponse } = require('http');
const methodOverride = require('method-override')
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)

);
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
*/



















server.get("/", function(req, res){
    res.send("4:16")
})

server.listen(process.env.PORT || 3000)