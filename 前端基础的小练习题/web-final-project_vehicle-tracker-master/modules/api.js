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

module.exports = {
    getAdmin,
    add_user_admin,
    add_user,
    login_user,
    edit_user_msg
};