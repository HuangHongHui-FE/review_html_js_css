function apply(fn, obj, args){
    // 判断, 如果没有传对象，就是全局对象
    if(obj === undefined || obj === null){
        obj = globalThis;
    }
    // 为obj添加临时方法
    obj.temp = fn;
    // 执行方法
    let result = obj.temp(...args)
    // 删除临时属性
    delete obj.temp;
    // 返回结果
    return result
}


function call(fn, obj, ...args){
    if(obj === undefined || obj === null){
        obj = globalThis;
    }
    obj.temp = fn;
    let result = obj.temp(...args)
    delete obj.temp();
    return result;
}


function bind(fn, obj, ...args){

    return function(...args2){
        if(obj === undefined || obj === null){
            obj = globalThis;
        }
        obj.temp = fn;
        let result = obj.temp(...args, ...args2)
        delete obj.temp();
        return result;
    }
}


function add(a,b){
    // console.log(this);
    // console.log(arguments);
    return a + b + this.c;
}
let obj = {
    c: 521
};
let fn4 = bind(add, obj, 10, 20);
console.log(fn4)
console.log(fn4(30, 50));
