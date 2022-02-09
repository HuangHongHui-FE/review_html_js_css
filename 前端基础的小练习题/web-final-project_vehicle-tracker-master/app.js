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

const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const api = require("./modules/api.js");

const { createToken, checkToken }= require('./utils/index.js'); 
// jwt.verify(token, 'Fizz', function (err, data) {if (err) console.log(err)console.log('解析的数据', data)})


app.use(async (req, res, next) => {
    // console.log(req.query)
    console.log(`${req.method} ${req.url} ${Date.now()} ${res.header.Authorization} ${req.headers.Authorization}`);
    let result = await api.getAdmin()
    // console.log(result[0])

    // checkToken(req.headers.Authorization).then(res=>{
    // let user_msg = await checkToken(res.header.Authorization)
    // console.log(user_msg)


    if(!result[0] && req.url !== '/adminLogin'){  // 如果没有username=“Administrator”或者password为空的，就重定向到adminLogin页面添加管理员
        res.redirect('/adminLogin')
    }else if(!res.header.Authorization && req.url !== '/login' && req.url !== '/register'){
        res.render('login')
    }
    // 验证token
    // if(!req.headers.Authorization){
    //     redirect('/login')
        // checkToken(req.headers.Authorization).then(res=>{
        //     //token验证成功
        //     console.log(res)
        //     //判断过期时间
        // }).catch(err=>{
        //     res.json({{err:-1,msg:'token非法'}})
        // })
    // }
    next();
});

// app.use(async (req, res, next) => {
//     if(!req.headers.Authorization && req.url !== '/login' && req.url !== '/register' && req.url !== '/adminLogin'){
//         res.render('login')
//     }
// })

app.use(router);

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});


