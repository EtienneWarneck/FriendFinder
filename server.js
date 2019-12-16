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

//app.use() is a middleware function.
// urlencoded is a middleware parses incoming requests and is based on body-parser
app.use(bodyparser.urlencoded({ extended: true })); //Before the handlers
app.use(express.json());
app.use(bodyparser.text());

//importing 
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

//app.METHOD(PATH, HANDLER)
//METHOD use() is a function that allows to add a middleware function.
//PATH for which the middleware function is invoked (act as a filter)
//HANDLER(function executed when the route is matched))
app.use('/', htmlRoutes);
app.use('/apiRoutes', apiRoutes);

app.post('/api/friends', function (req, res) {
  // console.log("apiRoutes.js POST user's survey:", req.body); //OK
  // Capture the user input object
  var userInput = req.body;
  // console.log(userInput);
  var userAnswers = userInput.scores;
  // console.log(userAnswers);
  var friends = [];
  var friends = require('./app/data/friends');
  // var friends = data.friends;

  var matchName = '';
  var matchImage = '';
 
  var totalDiff = 100;

  for (var i = 0; i < friends.length; i++) { //for each of the 4 friends
    var diff = 0;
    for (var j = 0; j < userAnswers.length; j++) { //for each score's length 
      // console.log('this'); // = 40
      diff += Math.abs(userAnswers[j] - friends[i].scores[j]);//Math.abs doesn't matter what order
      console.log(diff); // Each diff btw user's score and 4 friends
    }
    if (diff < totalDiff) {
      totalDiff = diff;
      matchName = friends[i].name;
      matchImage = friends[i].image;
    
    }
  }
  friends.push(userInput);

  // res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
  res.json({ 
    status: 'OK',
   matchName: matchName,
    matchImage: matchImage
   });
  // console.log(res);

});

// var friends = require('./app/data/friends.js');
// // console.log("server.js IMAGE", friendsArray[0].photo); //image

// app.use('./api/friends', friends);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
}); 