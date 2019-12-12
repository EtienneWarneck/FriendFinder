const express = require('express');
const path = require("path");
const router = express.Router();

// Import the array fo friends
var friends = require('../data/friends.js');

// // A GET route used to display a JSON of all possible friends.
router.get("/api/friends", function (req, res, next) {
    console.log("friends get")
    var userInput = req.body;
});

// A POST route to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

// Add new friend entry
router.post('/api/friends', function (req, res) {
    console.log("friends post")
    friends.push(req.body);
        res.json(friends);
    console.log(req.body);

    });

module.exports = router;