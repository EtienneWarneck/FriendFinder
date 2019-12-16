const express = require('express');
const router = express.Router();

// A GET route used to display a JSON of all possible friends.
router.get('/api/friends', function (req, res, next) {
    res.json(friends);  
});









module.exports = router;

