// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyparser = require('body-parser');
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();// app is a requesthandler
var PORT = 3000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, 'app', 'public'))); 
//static is a middleware to serve static files such as images, CSS files, and JavaScript files.

//importing 
const htmlRoutes = require('./app/routing/htmlRoutes'); 
const apiRoutes = require('./app/routing/apiRoutes');

//A built-in middleware function. It parses incoming requests
app.use(bodyparser.urlencoded({ extended: true })); 
app.use(express.json());


app.use( htmlRoutes); //add path as a filter

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'public', '404.html'));
});

app.use( apiRoutes);
console.log(apiRoutes, 'APIROUTES');

//create server and listen to it on PORT
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
}); 