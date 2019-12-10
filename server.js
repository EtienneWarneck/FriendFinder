// Dependencies
// =============================================================
var express = require("express");
// var path = require("path");
var bodyparser = require('body-parser');

var PORT = process.env.PORT || 3000;


// Sets up the Express App
// =============================================================
var app = express();// app is a requesthandler

//importing 
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes'); 

//A built-in middleware function. It parses incoming requests
app.use(bodyparser.urlencoded({ extended: false })); 

app.use(htmlRoutes);
app.use(apiRoutes);

//create server and listen to it on PORT
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
}); 