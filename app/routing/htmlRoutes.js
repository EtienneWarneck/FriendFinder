const express = require("express");
const router = express.Router();
const path = require("path");

//Display a default catch-all route to home.html page
router.get("/", (req, res, next) => {
    console.log('HOME middleware')
    res.sendFile(path.join(__dirname, '..','public' , 'home.html'));
});

//Display route to the survey page
router.get("/survey", (req,res,next) => {
    console.log('SURVEY middleware')
res.sendFile(path.join(__dirname, '..', 'public' , 'survey.html'));
});

//Redirect 
router.get('/*',function (req, res) {
    // res.redirect('/');
res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});


module.exports = router;