// Setup express router
const express = require("express");
const router = express.Router();

// Route handlers
// -------------------------------------------------------------------------

// TODO Your Code Here
router.get("/", function (req, res) {
    const context = {
        homePage: true
    };
    res.render("home", context);
});
router.get("/home", function (req, res) {
    const context = {
        homePage: true
    };
    res.render("home", context);
});

router.get("/hillary", function (req, res) {
    const context = {
        homePage: true
    };
    res.render("hillary", context);
});

router.get("/sheppard", function (req, res) {
    const context = {
        homePage: true
    };
    res.render("sheppard", context);
});
// -------------------------------------------------------------------------

module.exports = router;