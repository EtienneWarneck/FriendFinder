const express = require("express");
const router = express.Router();
const path = require("path");

//Display a default catch-all route to home.html page
router.get("/", (req, res, next) => {
    console.log('htmlRoutes.js "/" GET middleware1')
    res.sendFile(path.join(__dirname, '..','public' , 'home.html'));
});

//Display route to the survey page
router.get("/survey", (req,res,next) => {
    console.log('htmlRoutes.js "/survey" GET middleware2') 
    res.sendFile(path.join(__dirname, '..', 'public' , 'survey.html'));
});

//Redirect or error
router.get('/*', (req, res, next) => {
    res.redirect('/');
    console.log('htmlRoutes.js "/*" GET middleware3')
// res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

module.exports = router;