// Setup / config code
// -------------------------------------------------------------------------
const express = require("express");
const app = express();
app.set("port", 3000);

const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "question-one-layout" }));
app.set("view engine", "handlebars");
// -------------------------------------------------------------------------


// TODO Enable access to the "public" folder
// -------------------------------------------------------------------------
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// -------------------------------------------------------------------------


// Enable your route handlers
// -------------------------------------------------------------------------
const routes = require("./routes/question-one-routes.js");
app.use(routes);


// -------------------------------------------------------------------------






// Start the server running.
app.listen(app.get("port"), function () {
    console.log(`Express started on http://localhost:${app.get("port")}/`);
});