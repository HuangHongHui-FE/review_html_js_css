// The express package contains Express, and its own required dependencies. It needs to be
// installed using npm.
const express = require("express");
const app = express();
const port = 3000;

// Setup Handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: null
}));
app.set("view engine", "handlebars");

// Setup static routing. Any file located in the "public" folder
// will be able to be accessed by clients directly.
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// When the user navigates to "favoriteThings", render a list of their favorite things.
app.get("/favoriteThings", function (req, res) {

    const context = {
        favorites: [
            'apple', 'dog', 'game'
        ]
    };

    res.render("favorites", context);
});

app.get("/articleSummaries", function (req, res) {

    const context = {
        articles: [
            { title: "Witty Whale", imageUrl: "http://placekitten.com/300/200", content: "Nam ipsum metus, semper ac nisi id, faucibus variu" },
            { title: "Hilarious Hyenas", imageUrl: "http://placekitten.com/300/200", content: "Praesent pulvinar iaculis massa, id iaculis nibh c" },
            { title: "Enormous Elephant", imageUrl: "http://placekitten.com/300/200", content: "Nam vitae pretium dui. Suspendisse tellus sem, mol" },
            { title: "Cold Cow", imageUrl: "http://placekitten.com/300/200", content: "Aliquam varius eros eget consectetur aliquam. Null" },
            { title: "Energetic Eel", imageUrl: "http://placekitten.com/300/200", content: "Phasellus sodales neque vel blandit efficitur. Pha" }
        ]
    };

    res.render("articles", context);
});

// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});