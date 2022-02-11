// TODO: Your app here
const express = require("express");
const app = express();
const port = 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "basic"
}));
const router = require("./routes/index.js");

app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const api = require("./modules/api.js");

app.use(async (req, res, next) => {
    // console.log(req.query)
    console.log(`${req.method} ${req.url} ${Date.now()} ${res.header.Authorization} ${req.headers.Authorization}`);
    let result = await api.getAdmin()
    // console.log(result[0])

    if(!result[0] && req.url !== '/adminLogin'){  // 如果没有username=“Administrator”或者password为空的，就重定向到adminLogin页面添加管理员
        res.render('adminLogin')
    }else if(!res.header.Authorization && req.url !== '/login' && req.url !== '/register'){
        res.render('login')
    }
    next();
});

app.use(router);

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});
