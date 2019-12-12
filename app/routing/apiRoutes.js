const express = require('express');
const path = require("path");
const router = express.Router();

var friends = require('../data/friends.js');

// A GET route used to display a JSON of all possible friends.
router.get("/api/friends", function (req, res, next) {
    console.log("apiRoutes.js GET friends", req.body); //HOW TO SEE THIS ???
    res.json(friends);
    //req.body. Contains key-value pairs of data submitted in the request body.
    // By default, it is undefined, and is populated when you use body-parsing 
    //middleware such as body-parser and multer.
});

// A POST route to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
router.post('/api/friends', function (req, res) {
    console.log("apiRoutes.js POST friends", req.body); //HOW TO SEE THIS ???

    // console.log(friends);
    for (var i = 0; i < friends.length; i++) { //each friend
        var currentDiff = 0;
        // console.log(friends[i].scores.length);
        for (var j = 0; j < friends[i].scores.length; j++) { //each ind score 
            // console.log('this');
            var currentScores = req.body.scores;
            // Math.abs(currentDiff += currentScores[j] - friends[i].scores[j])
            currentDiff+= Math.abs(currentScores[j] - friends[i].scores[j])
        }
        console.log(currentDiff);
    }
    friends.push(req.body);
});

//     	// Add new user
// 		friends.push(userInput);
// });

module.exports = router;