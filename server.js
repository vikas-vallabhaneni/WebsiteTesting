var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello World 3:54 pm!")
})

app.listen(process.env.PORT || 3000)