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


