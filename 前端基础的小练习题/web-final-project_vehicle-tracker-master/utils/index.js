
const jwt = require("jsonwebtoken");

const secret = "HHHH";

function createToken(payload){
    // payload.nbf = new Date();
    // payload.rtiem = new Date();
    payload.exp = 60 * 60 * 2 *10000000;
    return jwt.sign(payload,secret);
}

function checkToken(token){
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secret,(err,res)=>{
            // console.log(err)
            if(!err) {
                resolve(res)
            }else{
                reject("token验证失败");
            }
        })
    })
}
module.exports = {
    createToken,checkToken
}
// 使用的时候：


// if(){
//     let token = createToken({username:req.query.name});
//     res.json({err:0,msg:'OK',token});
// }else{
//     res.json({err:-1,msg:'fail'});
// }