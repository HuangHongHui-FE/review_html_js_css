const express = require("express");
const router = express.Router();

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const api = require("../modules/api.js");

const { createToken, checkToken }= require('../utils/index.js'); 

const tools = require("../utils/tools");

router.get("/", function(req, res) {
    // console.log(req.query.token)
    res.render('index')
});

// 管理员的主页
router.get("/admin_index", function(req, res) {
    res.render('adminIndex')
});


// 管理员增加信息的页面
router.get('/adminLogin', function(req, res) {
    res.render("adminLogin")
})

router.post("/adminLogin", async function(req, res) {
    // console.log(req.body)
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
    console.log(result[0])
    if(result[0] == undefined){
        // 用户名或密码错误！
        res.redirect('/login')
    }else if(req.body.username=="Administrator"){
        let token = createToken({username: result[0].username, password: result[0].password})
        // res.json({token})
        res.header.Authorization = token
        res.redirect(`/admin_index`)
    }else{
        let token = createToken({username: result[0].username, password: result[0].password})
        // res.json({token})
        res.header.Authorization = token
        // res.redirect(`/?token=${token}`)
        res.redirect('/')
    }
})

router.get("/register", function(req, res){
    res.render('register')
})

router.post("/register", async function(req, res){
    // console.log(req.body)
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
    console.log(data[0])
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

// 车辆创建页面
router.get('/create_che', async function(req, res){
    res.render('createChe')
})

router.post("/create_che", tools.multer().single("picture_path"), async (req, res) => {
    await api.create_che(req.body.register_number, req.body.maker, req.body.model, req.body.year, req.body.start_value, req.body.color, req.body.nums, req.file.filename)
    res.redirect('/admin_index')
})

// 车辆删除页面
router.get('/delete_che', async function(req, res){

    let result = await api.data_all_cars() 
    // console.log(result)
    content = {data: result}
    res.render('deleteChe', content)
})

router.post("/delete_che", async (req, res) => {
    await api.delete_che(req.body.register_number)
    res.redirect('/admin_index')
})

// 车辆编辑页面
router.get('/edit_che', async function(req, res){
    let result = await api.data_all_cars()
    content = {data: result}
    res.render('editChe', content)
})

router.post("/edit_che", async (req, res) => {
    console.log(req.body)
    await api.edit_che(req.body.register_number, req.body.maker, req.body.model, req.body.year, req.body.start_value, req.body.color, req.body.nums)
    res.redirect('/admin_index')
})

// 车辆对应是否可预订用户页面
router.get("/cars_book_user", async (req, res) => {
    let result_cars = await api.data_all_cars() 
    let result_user = await api.all_user()
    
    for(let i of result_cars){
        i.user_data = result_user
    }
    content = {cars_data: result_cars}

    res.render('carsBookUser', content)
})

// 增加关系
router.get('/add_book', async(req, res) => {
    // 查看是否已经有预约关系
    let result = await api.is_same(req.query.username, req.query.register_number)
    // 如果还没有关系，则加入关系
    if(result[0] == undefined){
        await api.add_user_cars(req.query.username, req.query.register_number)
    }
})

// 管理员删除车辆与用户的关系
router.get('/delete_book', async(req, res) => {
    // console.log(req.query)
    let result = await api.is_same(req.query.username, req.query.register_number)
    // 如果已经有关系，则删除关系
    if(result[0]){
        await api.delete_user_cars(req.query.username, req.query.register_number)
    }
})

// 查看所有可以预定的车辆
router.get('/see_can_book', async(req, res) => {
    let user_msg = await checkToken(res.header.Authorization)
    let result = await api.all_cars_book(user_msg.username)
    console.log(result)
    let content = {
        data: result
    }
    res.render('seeCanBook', content)
})

// 根据车牌号查车辆信息
router.get('/data_car', async(req, res) => {
    console.log(req.query.register_number)
    let result = await api.data_car(req.query.register_number)
    res.json(result)
})

// 车辆预定
router.get('/yuding_msg', async (req, res) => {
    // console.log(req.query)
    let user_msg = await checkToken(res.header.Authorization)
    res.render('yudingMsg',{register_number: req.query.register_number, username: user_msg.username})
})

router.post('/yuding_msg', async (req, res) => {
    console.log(req.body)
    
    await api.add_yuding_msg(req.body.start_time, req.body.end_time, req.body.register_number, req.body.distance, req.body.username, req.body.money)
    res.redirect('/see_can_book')
})

// 我的预定
router.get('/my_book', async (req, res) => {
    // console.log(req.query)
    let user_msg = await checkToken(res.header.Authorization)
    let result = await api.get_user_book_msg(user_msg.username)
    console.log(result)
    res.render('myBook',{result: result})
})

// 通过id删除预定信息
router.post('/delete_yuding', async(req, res)=>{
    // console.log(req.body)

    await api.delete_yuding(req.body.id)
    res.redirect('/')
})

module.exports = router;