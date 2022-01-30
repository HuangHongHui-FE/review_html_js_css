// Setup Express
const express = require("express");
const app = express();
const port = 3000;

// Setup Handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: null
}));
app.set("view engine", "handlebars");

// Setup fs
const fs = require("fs");

// Set up to read POSTed form data
app.use(express.urlencoded({ extended: true }));

// Setup multer (files will temporarily be saved in the "temp" folder).
const path = require("path");
const multer = require("multer");
const upload = multer({
    dest: path.join(__dirname, "temp")
});


// Make the "public" folder available statically
app.use(express.static(path.join(__dirname, "public")));

// Our file DAO
const dao = require("./modules/files-dao.js");


app.get("/", async function (req, res) {
    // TODO: Get an array of all file entries from the database
    let AllFileEntriesSorted = await dao.getAllFileEntriesSorted()
    
    content = {FileEntriesSorted: AllFileEntriesSorted}
    // console.log(content)
    // TODO: Display the 'file' view, providing the list of file entries from above
    res.render("file", content);
});


app.post("/upload", upload.single("file"), async function(req, res) {
    // TODO: Get the text fields from the submitted form
    let title = req.body.title
    let description = req.body.description
    // TODO: Receive the uploaded file
    let filename = req.file.filename + '.pdf'

    // TODO: Move the uploaded file to the `public/uploaded-files` directory, with a `.pdf` extension appended
    fs.rename(`./temp/${req.file.filename}`,`./public/uploaded-files/${filename}`,(err)=>{
        if(err){
            return;
        }
    })
    // TODO: Insert details of the uploaded file into the database
    console.log(filename)
    let result = await dao.addNewFileEntry(filename, title, description)
    // TODO: Redirect the user to the main page
    res.redirect('/');
    
});


app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});


