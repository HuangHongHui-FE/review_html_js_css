// Setup express router
const express = require("express");
const router = express.Router();

// Route handlers
// -------------------------------------------------------------------------

router.get("/", function(req, res) {
    console.log(req.query.message)

    res.locals.message = req.query.message;

    // TODO 4) Add the name, address, and phoneNum to res.locals. The values should be
    // obtained from the "details" cookie. Be sure to take into account the fact that the cookie
    // may be undefined.
    // console.log(req.cookies.details)
    if(req.cookies.details!==undefined){
        res.locals.name = req.cookies.details.name;
        res.locals.address = req.cookies.details.address;
        res.locals.phoneNum = req.cookies.details.phoneNum;
    }



    res.render("question-two-form", res.locals);
});

router.post("/submit", function(req, res) {

    // TODO 1) Add three properties to this object: "name", "address", and "phoneNum". The values
    // of these properties should come from the user's form submission.
    // console.log(req.body)
    let detailsCookie = {
        name: req.body.name,
        address: req.body.address,
        phoneNum: req.body.phoneNum,
    };

    // TODO 2) Save the cookie to the response, with the name "details".
    res.cookie('details',detailsCookie)

    // TODO 3) If the user actually typed a name, address, and phoneNum, redirect to the /myDetails route.
    // Otherwise, redirect to the / route, with the message query param set to "Details saved for later".
    if(req.body.name!='' && req.body.address!= '' && req.body.phoneNum != ''){
        res.redirect('/myDetails');
    }else{
        res.redirect('/?message=Details saved for later');
        // res.redirect('/', {params: "Details saved for later"});
    }
});

// Show the details stored in the cookie
router.get("/myDetails", function(req, res) {

    // TODO 6) Add the name, address, and phoneNum to res.locals. The values should be
    // obtained from the "details" cookie.
    res.locals.name = req.cookies.details.name;
    res.locals.address = req.cookies.details.address;
    res.locals.phoneNum = req.cookies.details.phoneNum;
    

    res.render("question-two-details", res.locals);
});

// -------------------------------------------------------------------------

module.exports = router;