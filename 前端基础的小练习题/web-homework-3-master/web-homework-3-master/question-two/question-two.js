// Setup / config code
// -------------------------------------------------------------------------
const express = require("express");
const app = express();
const port = 3000;

// Setup Handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "question-two-layout"
}));
app.set("view engine", "handlebars");

// Set up to read POSTed form data
app.use(express.urlencoded({ extended: true }));

// Setup cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// -------------------------------------------------------------------------


// Route handlers
// -------------------------------------------------------------------------
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const router = require("./routes/question-two-routes.js");
app.use(router);
// -------------------------------------------------------------------------

// Start the server running.
// -------------------------------------------------------------------------
app.listen(port, function () {
    console.log(`Express listening on port ${port}!`);
});
// -------------------------------------------------------------------------
