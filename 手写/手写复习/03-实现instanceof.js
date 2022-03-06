function myInstanceof(left, right){
    left = left.__proto__
    while(left){
        if(left === right.prototype){
            return true
        }
        left = left.__proto__
    }
    return false
}

console.log(null instanceof Object)
console.log(myInstanceof([], Array))
