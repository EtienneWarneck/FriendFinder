// var path = require('path');
const express = require('express');

const router = express.Router();

//Display route to the survey page
router.GET('/survey.html', (req, res, next) => {
    console.log('This always runs');
    res.sendFile(path.join(__dirname, '../public/home.html'));
})

//Display a default catch-all route to home.html page
router.GET('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));

})

module.exports = router;