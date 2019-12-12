// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyparser = require('body-parser');


// Sets up the Express App
// =============================================================
var app = express();// app is a requesthandler
var PORT = 3000;

// Access CSS files
app.use(express.static(path.join(__dirname, 'app', 'public'))); 
//static is a middleware to serve static files such as images, CSS files, and JavaScript files.

//importing 
const htmlRoutes = require('./app/routing/htmlRoutes');  //html
const apiRoutes = require('./app/routing/apiRoutes');  //data

//app.use() is a middleware function

app.use(bodyparser.urlencoded({ extended: true })); 
app.use(express.json());

//app.METHOD(PATH, HANDLER).The use()METHOD is a function that allows to add a middleware function.
//The PATH for which the middleware function is invoked, act as a filter)
//The HANDLER(function executed when the route is matched))
app.use('/', htmlRoutes); 

app.use('/apiRoutes', apiRoutes); 

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
}); 