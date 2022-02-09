const express = require("express");
const router = express.Router();

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const api = require("../modules/api.js");

const { createToken, checkToken }= require('../utils/index.js'); 

router.get("/", function(req, res) {
    // console.log(req.query.token)
    // this.sessionStorage.token = req.query.token
    res.render('index')
    // res.render("question-two-form");
});


// 管理员增加信息的页面
router.get('/adminLogin', function(req, res) {
    res.render("adminLogin")
})

router.post("/adminLogin", async function(req, res) {
    console.log(req.body)
    await api.add_user_admin('Administrator', req.body.password, "CH", "20001216", 'A')

    res.redirect('/login')
});

router.get('/login', function(req, res) {
    // console.log(req.query)
    res.render("login")
})

router.post("/login", async function(req,res){
    // console.log(req.body)
    let result = await api.login_user(req.body.username, req.body.password)
    // console.log(result[0])
    if(result[0] == undefined){
        // 用户名或密码错误！
        res.redirect('/login')
    }else{
        let token = createToken({username: result[0].username, password: result[0].password})
        // res.json({token})
        res.header.Authorization = token
        res.redirect(`/?token=${token}`)
    }
})

router.get("/register", function(req, res){
    res.render('register')
})

router.post("/register", async function(req, res){
    console.log(req.body)
    if(req.body.username === 'Administrator'){
        res.render('register')
    }else{
        await api.add_user_admin(req.body.username, req.body.password, req.body.rel_name, req.body.start_date, req.body.class_name)
        res.redirect('/login')
    }
})

// 用户信息查看
router.get("/user_msg", async function(req, res){
    // console.log(req.body)
    // 解析token
    let user_msg = await checkToken(res.header.Authorization)
    // 查询信息
    let data = await api.login_user(user_msg.username, user_msg.password)
    // console.log(data[0])
    res.render("userMsgManage", data[0])
})

// 用户信息修改
router.get('/user_msg_edit', async function(req, res){
    // 解析token
    let user_msg = await checkToken(res.header.Authorization)
    // 查询信息
    let data = await api.login_user(user_msg.username, user_msg.password)
    res.render("userMsgEdit", data[0])
})

router.post("/user_msg_edit", async function(req, res){
    await api.edit_user_msg(req.body.username, req.body.password, req.body.rel_name, req.body.born_date, req.body.class_name)
    res.redirect('/login')
})




module.exports = router;