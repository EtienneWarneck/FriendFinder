
const express = require("express");
const router = express.Router();
const path = require("path");

//Display route to the survey page.

router.get("/survey", (req,res,next) => {
res.sendFile(path.join(__dirname, '..','public' , 'survey.html'));
});

//Display a default catch-all route to home.html page
router.get("/home", (req, res, next) => {
    res.sendFile(path.join(__dirname, '..','public' , 'home.html'));
})

// router.get("/", (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../','public' , 'notFound.html'));
// })


module.exports = router;