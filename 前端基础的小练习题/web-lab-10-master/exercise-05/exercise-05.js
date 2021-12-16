// Import packages, initial setup
const express = require("express");
const app = express();
const port = 3000;

// Enable static routing for "public" folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Set up to read POSTed form data
app.use(express.urlencoded({ extended: true }));

// TODO Your code here.
app.get("/formGet", function (req, res) {

    // Gets the "name" query parameter (e.g. http://..../getGreeting?name=Andrew)
    console.log(req.query)
    const name = req.query.name;
    const city = req.query.city;
    const thoughts = req.query.thoughts;
    const experience = req.query.experience;
    const mammal = req.query.mammal;
    const comments = req.query.comments;
    const submit_button = req.query.submit_button
    const data = {
        name,
        city,
        thoughts,
        experience,
        mammal,
        comments,
        submit_button
    };

    res.json(data);
});


// handle post
app.post("/formGet", function (req, res) {

    // Gets the "name" query parameter (e.g. http://..../getGreeting?name=Andrew)
    // console.log(req.query)
    const name = req.body.name;
    const city = req.body.city;
    const thoughts = req.body.thoughts;
    const experience = req.body.experience;
    const mammal = req.body.mammal;
    const comments = req.body.comments;
    const submit_button = req.body.submit_button
    const data = {
        name,
        city,
        thoughts,
        experience,
        mammal,
        comments,
        submit_button
    };

    res.json(data);
});

// Start the server running
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});
