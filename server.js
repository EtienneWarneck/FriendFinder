// Dependencies
var express = require("express");
var path = require("path");
var bodyparser = require('body-parser'); //Node.js body parsing middleware.
//Parse incoming request bodies in a middleware before your handlers,
//available under the req.body property.

var app = express();// app is a requesthandler
var PORT = 3000;

// Access CSS files
//static is a middleware to serve static files such as images, CSS files, and JavaScript files.
app.use(express.static(path.join(__dirname, 'app', 'public'))); 

//importing 
const htmlRoutes = require('./app/routing/htmlRoutes');  
const apiRoutes = require('./app/routing/apiRoutes');  

//app.use() is a middleware function.
// urlencoded is a middleware parses incoming requests and is based on body-parser
app.use(bodyparser.urlencoded({ extended: true })); //Before the handlers
app.use(express.json());

//app.METHOD(PATH, HANDLER)
//METHOD use() is a function that allows to add a middleware function.
//PATH for which the middleware function is invoked (act as a filter)
//HANDLER(function executed when the route is matched))
app.use('/', htmlRoutes); 
app.use('/apiRoutes', apiRoutes); 

var friendsArray = require('./app/data/friends.js');
console.log("server.js IMAGE", friendsArray[0].photo); //image


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
}); 