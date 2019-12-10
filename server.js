// Dependencies
// =============================================================
var express = require("express");
// var path = require("path");
var bodyparser = require('body-parser');

// Sets up the Express App
// =============================================================
var app = express();// app is a requesthandler

var PORT = process.env.PORT || 3000;
//importing 
const htmlRoutes = require('./app/routing/htmlRoutes'); 
const apiRoutes = require('./app/routing/apiRoutes');

//A built-in middleware function. It parses incoming requests
app.use(bodyparser.urlencoded({ extended: false })); 

app.use('/htmlRoutes', htmlRoutes); //add path as a filter
app.use('/apiRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>404 Page not found</h1>');
});

//create server and listen to it on PORT
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
}); 