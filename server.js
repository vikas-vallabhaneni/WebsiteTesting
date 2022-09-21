var express = require("express");
var server = express();
const PORT = process.env.PORT || 3000;
server.use(express.static("public"));
var bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended: true}));

server.get('/', function(req, res){
    res.render('defaultMessage.ejs');
});

server.get('/home', function(req, res){
    res.render('home.ejs');
});

server.listen(PORT, function(error){if(error)console.log(error); else console.log("Server listening on port " + PORT)})