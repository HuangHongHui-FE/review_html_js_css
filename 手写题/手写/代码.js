// 1. 变量提升
// var a = 1;

// function foo() {
//     console.log(a);
//     a = 2;     // 此处的a相当于window.a
// }

// foo();
// console.log(a);   //打印结果是2


// 2. 
// console.log(typeof typeof typeof null)


// 3.
// function f(x){
//     var x;
//     console.log(x)
// }

// f(5)



// 4 ??
// var name = '123'
// var obj = {
//     name: '456',
//     getName: function(){
//         function printName(){
//             console.log(this.name)
//         }
//         printName()
//     }
// }

// obj.getName()


// 5
// setTimeout(() => {
//     console.log('quick timer')
// }, 0)

// new Promise((resolve, reject) => {
//     console.log('init promise')
//     process.nextTick(resolve)
// }).then(() => {
//     console.log('promise.then')
// })

// process.nextTick(() => {
//     console.log('nexttack')
// })

// setImmediate(() => {
//     console.log('setImmediate')
// })


// 6. 
// // 手写一个repeact()函数，加上下面的代码运行，使每3秒打印一个helloword，总共执行4次
//  const repeatFunc = repeact(console.log,4,3000) repeatFunc('helloword')

// function repeact(way, nums, time){
//     return function repeactI(con){
//         var i = 0
//         let timer = setInterval(()=> {
//             way(con)
//             i++
//             if(i == nums){
//                 clearInterval(timer)
//             }
//         }, time)
//     }
// }

// const repeactFunc = repeact(console.log, 4, 3000)
// repeactFunc('helloWorld')



// 7. js随机生成颜色
// let r = Math.round(Math.random()*255);
// let g = Math.round(Math.random()*255);
// let b = Math.round(Math.random()*255);
// let color = `rgb(${r}, ${g}, ${b})`


// 8. 给定两个字符串 strA 和 strB, 求 strB 在 strA 中出现的次数
// str1 = 'aaaabbabaaa'
// str2 = 'aa'

// function nums(strA, strB){
//     let left = 0;
//     let count = 0;
//     let lenB = strB.length
//     while(left < strA.length){
//         if(strA.slice(left, left + lenB) == strB){
//             count++;
//             left=left+lenB;
//         }else{
//             left++
//         }
//     }
//     return count;
// }

// console.log(nums(str1, str2))




// 9. 找出数组中重复出现的元素
// const test = [1, 2, 4, 4, 3, 3, 1, 5, 3]

// 1. 
// let len = test.length
// const res = []
// const res2 = []
// for(let i = 0; i < len; i++){
//     if(!res.includes(test[i])){
//         res.push(test[i])
//     }else{
//         if(!res2.includes(test[i])){
//             res2.push(test[i])
//         }
//     }
// }
// console.log(res2)


// 2. 
// const len = test.length;
// const hash = new Map();
// for(let i = 0; i < len; i++){
//     if(!hash.has(test[i])){
//         hash.set(test[i], 1)
//     }else{
//         let count = hash.get(test[i])
//         count++
//         hash.set(test[i], count);
//     }
// }

// const res = []
// for(let key of hash.keys()){
//     if(hash.get(key) !== 1){
//         res.push(key)
//     }
// }

// console.log(res)




// 10. 假设有个这样的函数add 接受任意数量的数字作为输入，
// 返回一个函数，该函数也能接受数量的数字作为输入，数出结果为前后输入的所有数字之和
// function add(...args){
//     console.log(args)
//     return function add_index(...args2){
//         let sum = 0
//         for(let i = 0; i < args.length; i++){
//             sum += args[i]
//         }
//         for(let i = 0; i < args2.length; i++){
//             sum += args2[i]
//         }
//         return sum
//     } 
// }

// console.log(add(1,2,3)(1,2,3,4))


// 11. 看输出
// const a = 10;
// const obj = {
//     a: 13,
//     b: () => {
//         console.log(this.a);
//     },
//     c: function () {
//         console.log(this.a)
//     },
//     d: function () {
//         return () => {
//             console.log(this);
//         }
//     },
//     e: function () {
//         return this.b
//     }
// }
// obj.b()
// obj.c()
// obj.d()()
// obj.e()()



// 12. 属性有null的就移除， 考虑嵌套
// let obj = {
//     a: 123,
//     b: null,
//     c: {
//         c1: 222,
//         c2: null, 
//         c3: {
//             c33: 333,
//             d33: null
//         },
//         c4: [1,2,3]
//     },
//     d: "abc" 
// }

// function clean_null(obj){
//     for(let key in obj){
//         if(obj[key] == null){
//             delete obj[key]
//         }else if(obj[key] instanceof Object && !Array.isArray(obj[key])){
//             clean_null(obj[key])
//         }
//     }
//     return obj
// }

// console.log(clean_null(obj))




// 13. js版本号排序
// let ls = ["3.1.4522.74", "0.2.45.4", "0.2.23.456", "1.0.1"]

// ls.sort((a, b) => {
//     return (Number("0." + a.split(".").join("")) - Number("0." + b.split(".").join("")))
// })

// console.log(ls)



// 14. 看输出结果
// var obj = {
//     value : 'obj',
//     fn : function(){ console.log(this.value) }
// }
// var fn = obj.fn;
// fn();
// obj.fn()

// fn.apply(obj)



// 15. 闭包用于在对象中创建私有变量
// var aaa = (function(){
//     var a = 1;

//     function bbb(){
//         a++
//         console.log(a);
//     }


//     function ccc(){
//         a++
//         console.log(a)
//     }

//     return {
//         b: bbb,
//         c: ccc
//     }
// })();
// console.log(aaa.a)  // underfined
// aaa.b();  // 2
// aaa.c();  // 3 



// 16. 找出数组中第一个没出现的最小整数
// function firstNum(nums){
//     for(let i = 1; i <= nums.length+1; i++){
//         if(!nums.includes(i)){
//             return i
//         }
//     }
// }


// function firstNum(nums){
//     let set = new Set()
//     for(let i = 1; i < nums.length; i++){
//         set.add(nums[i])
//     }

//     for(let i = 1; i <= nums.length + 1; i++){
//         if(!set.has(i)){
//             return i
//         }
//     }
// }



// 