const database = require("./database.js");

async function getAdmin() {  // 查询数据库里是否有管理员
    const db = await database;

    let res = db.query(`SELECT * FROM pro_users WHERE username = 'Administrator' and password != '' `)
    return res;
}

// 增加管理员信息
async function add_user_admin(username, password, rel_name, born_date, class_name){  // 添加管理员密码到数据库 
    let db = await database;
    let res = db.query("INSERT INTO pro_users value (?, ?, ?, ?, ?)", [username, password, rel_name, born_date, class_name])
    return res;
}

// 注册用户
async function add_user(username, password, rel_name, born_date, class_name){
    let db = await database;
    let res = db.query("INSERT INTO pro_users value (?, ?, ?, ?, ?)", [username, password, rel_name, born_date, class_name])
    return res;
}

async function login_user(username, password){
    let db = await database;
    let res = db.query(`SELECT * FROM pro_users WHERE username = '${username}' and password = '${password}'`)
    return res;
}

// 修改用户信息
async function edit_user_msg(username, password, rel_name, born_date, class_name){
    let db = await database;
    let res = db.query(`UPDATE pro_users SET username = '${username}', password = '${password}', rel_name = '${rel_name}', born_date = '${born_date}', class_name = '${class_name}' WHERE username = '${username}';`)
    return res;
}

// 创建新车辆
async function create_che(register_number, maker, model, year, start_value, color, nums, picture_path){
    let db = await database;
    let res = db.query("INSERT INTO pro_cars value (?, ?, ?, ?, ?, ?, ?, ?)", [register_number, maker, model, year, start_value, color, nums, picture_path]);
    return res;
}

// 所有车辆的数据
async function data_all_cars(){
    let db = await database;
    let res = db.query(`SELECT * FROM pro_cars`)
    return res;
}

// 删除传过来register_number的车辆
async function delete_che(register_number){
    let db = await database;
    let res = db.query(`DELETE FROM pro_cars WHERE register_number = '${register_number}';`)
    return res;
}

// 编辑传过来register_number的车辆
async function edit_che(register_number, maker, model, year, start_value, color, nums){
    let db = await database;
    let res = db.query(`UPDATE pro_cars SET register_number = '${register_number}', maker = '${maker}', model = '${model}', year = '${year}', start_value = '${start_value}', color = '${color}', nums = ${nums} WHERE register_number = '${register_number}';`)
    return res;
}

// 查询所用用户
async function all_user(){
    let db = await database;
    let res = db.query("SELECT * FROM pro_users")
    return res;
}

// 查询是否已经有车辆与用户的关系
async function is_same(username, register_number){
    let db = await database;
    let res = db.query(`SELECT * FROM pro_users_cars WHERE username='${username}' and register_number='${register_number}'`)
    return res;
}

// 加入车辆与用户关系数据
async function add_user_cars(username, register_number){
    let db = await database;
    let id = new Date().getTime().toString().slice(5,)
    let res = db.query("INSERT INTO pro_users_cars value (?, ?, ?)", [id,username, register_number])
    return res;
}

// 删除车辆与用户关系数据
async function delete_user_cars(username, register_number){
    let db = await database;
    let res = db.query(`DELETE FROM pro_users_cars WHERE register_number = '${register_number}' and username='${username}';`)
    return res;
}

// 从pro_users_cars得到用户对应的所有可预订的车辆
async function all_cars_book(username){
    let db = await database;
    let res = db.query(`SELECT * FROM pro_users_cars WHERE username='${username}';`)
    return res;
}

// 根据register_number查整个车辆数据
async function data_car(register_number){
    let db = await database;
    let res = db.query(`SELECT * FROM pro_cars WHERE register_number='${register_number}';`)
    return res;
}

// 增加预定车辆信息
async function add_yuding_msg(start_time, end_time, register_number, distance, username, money){
    let db = await database;
    let id = new Date().getTime().toString().slice(5,)
    let res = db.query("INSERT INTO pro_reserve_record value (?, ?, ?, ?, ?, ?, ?)", [id,start_time, end_time, register_number, distance, username, money])
    return res;
}

// 通过用户名查找用户的预定信息
async function get_user_book_msg(username){
    let db = await database;
    let res = db.query(`SELECT * FROM pro_reserve_record WHERE username='${username}';`)
    return res;
}

async function delete_yuding(id){
    let db = await database;
    let res = db.query(`DELETE FROM pro_reserve_record WHERE id = '${id}';`)
    return res;
}

module.exports = {
    getAdmin,
    add_user_admin,
    add_user,
    login_user,
    edit_user_msg,
    create_che,
    data_all_cars,
    delete_che,
    edit_che,
    all_user,
    is_same,
    add_user_cars,
    delete_user_cars,
    all_cars_book,
    data_car,
    add_yuding_msg,
    get_user_book_msg,
    delete_yuding
};