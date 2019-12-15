const express = require('express');
const router = express.Router();
// var data = require('../data/emptyfriends');
// var friends = data.friends;
// console.log("ALL DATA FROM friends.js: ", friends); //OK  

// A GET route used to display a JSON of all possible friends.
router.get('/api/friends', function (req, res, next) {
    // console.log("apiRoutes.js GET friends", req.body); // ???
    res.json(friends); //send a json file 
});

// req.body. Contains key-value pairs of data submitted in the request body.
// By default, it is undefined, and is populated when you use body-parsing 
// middleware such as body-parser and multer.

// A POST route to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
// router.post('/api/friends', function (req, res) {
//     console.log("apiRoutes.js POST user's survey:", req.body); //OK
//     // Capture the user input object
//     var userInput = req.body;
//     console.log(userInput);
//     var userAnswers = userInput.scores;
//     console.log(userAnswers);
//     var friends=[]; 
//     var matchName = '';
//     // var matchImage = '';

//     var totalDiff = 1000;

//     for (var i = 0; i < friends.length; i++) { //for each of the 4 friends

//         var diff = 0;
//         for (var j = 0; j < userAnswers.length; j++) { //for each score's length 
//             console.log('this'); // = 40

//             diff += Math.abs(userAnswers[j] - friends[i].scores[j]);//Math.abs doesn't matter what order
//             console.log(diff); // Each diff btw user's score and 4 friends
//         }
//         if (diff < totalDiff) {
//             totalDiff = diff;
//             matchName = friends[i].name;
//             // matchImage = friends[i].photo;
//         }
//     }
//     friends.push(userInput);


//     // res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
//     res.json({ status: 'OK', matchName: matchName });

// });


module.exports = router;

