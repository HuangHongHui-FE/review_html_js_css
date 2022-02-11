
const jwt = require("jsonwebtoken");

const secret = "HHHH";

function createToken(payload){
    // payload.nbf = new Date();
    // payload.rtiem = new Date();
    payload.exp = 60 * 60 * 2 *1000000000;
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