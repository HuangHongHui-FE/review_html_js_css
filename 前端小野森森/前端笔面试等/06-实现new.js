// class Test{
//     constructor() {

//     }

//     add(){

//     }
// }

// // 相当于 

// ;(function() {
//     // 构造器
//     function Test(a, b){
//         this.a = a;
//         this.b = b;
//     }
//     Test.prototype.add = function() {
//         return this.a + this.b;
//     }

//     const test = new Test(1, 2);
//     console.log(test);
// })


function myNew(fn, ...args){
    // 1. 创建一个空对象
    const obj = {}

    // 2. 继承构造函数的原型
    obj.__proto__ = fn.prototype

    // 3. this指向obj，并调用构造函数
    fn.apply(obj, args)

    // 4. 返回对象
    return obj;
}