const express = require('express');

const router = express.Router();

// A GET route used to display a JSON of all possible friends.
router.get("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// A POST route to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
router.post("/api/friends", function (req, res) {
    return res.json(friends);
});


module.exports = router;