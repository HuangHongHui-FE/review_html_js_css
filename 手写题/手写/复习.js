// function promiseAll(promises){
//     return new Promise((resolve, reject) => {
//         if(!Array.isArray(promises)){
//             console.log('promises 必须是个数组')
//         }
//         let count = 0;
//         let result = []
//         promises.forEach((item, i) => {
//             item.then(res => {
//                 result[i] = res
//                 count++
//                 if(count == promises.length){
//                     resolve(result)
//                 }
//             }, err => {
//                 reject(err)
//             })
//         });
//     })
// }



// function promiseRace(promises){
//     return new Promise((resolve, reject) => {
//         for(let i = 0; i < promises.length; i++){
//             Promise.resolve(promises[i]).then(res => {
//                 resolve(res)
//             }, err => {
//                 reject(err)
//             })
//         }
//     })
// }



// function deepClone(target, map = new Map()){
//     if(typeof target !== 'object' || target == null){
//         return target
//     }
//     let res = Array.isArray(target) ? []: {}

//     if(map.get(target)){
//         return map.get(target)
//     }
//     map.set(target, res)
//     for(const key in target){
//         res[key] == deepClone(target[key], map)
//     }
//     return res
// }


// function limitNum(arr, limit = 3){

//     return new Promise((resolve, reject) => {
//         let count = 0, res = [];
//         while(limit > count){
//             start()
//             count++
//         }

//         function start(){
//             let task = arr.shift()
//             let result = task()
//             res.unshift(result)
//             if(!arr){
//                 resolve(res)
//             }
//         }
//     })
// }




// class Father{
//     constructor(name){
//         this.name = "father"
//     }
//     eat(){
//         console.log("我是：" + this.name)
//     }
// }

// class Child extends Father{
//     constructor(name, age){
//         super(name)
//         // this.name = name
//         this.age = age
//     }
// }

// let xm  = new Child('xiaoming', 12)

// console.log(xm.name)
// console.log(xm.age)
// xm.eat()




// let arr = [1,2,3,4,3,6,5,2,2,4]

// let arr = [...new Set(arr)]

// let res = []
// for(let i = 0; i < arr.length; i++){
//     if(!res.includes(arr[i])){
//         res.push(arr[i])
//     }
// }

// let arr = Array.from(new Set(arr))




// let url = 'http://www.baidu.com?a=aaa&b=bbb'

// function url_params(url){
//     let res1 = url.split('?')[1]
//     let res_ls = res1.split('&')
//     let obj = {}
//     res_ls.forEach((item,index) => {
//         obj[item.split('=')[0]] = item.split('=')[1]
//     })
//     return obj
// }
// console.log(url_params(url))


// const URLSearchParams1 = new URLSearchParams(url.split("?")[1]);
// console.log(URLSearchParams1)
// // 把键值对列表转发成一个对象
// const params = Object.fromEntries(URLSearchParams1.entries())

// console.log(params)




// class eventBus1{
//     constructor(){
//         this.cache= {}
//     }

//     on(name, fn){
//         if(this.cache[name]){
//             this.cache[name].push(fn)
//         }else{
//             this.cache[name] = [fn]
//         }
//     }
//     emit(name, once=false){
//         if(this.cache[name]){
//             const tasks = this.cache[name].slice()
//             for(let i of tasks){
//                 i()
//             }
//         }

//         if(once){
//             delete this.cache[name]
//         }
//     }

//     off(name, fn){
//         const tasks = this.cache[name]
//         if(tasks){
//             const index = tasks.indexOf(fn)
//             if(index >= 0){
//                 tasks.splice(index, 1)
//             }
//         }
//     }
// }

// const eventBus = new eventBus1()
// const task1 = () => {console.log('task1')}
// const task2 = () => {console.log('task2')}
// const task3 = () => {eventBus.on('task3', task3)}

// eventBus.on('task', task1)
// eventBus.on('task2', task2)
// eventBus.on('task3', task3)


// // eventBus.off('task', task1)

// setTimeout(()=>{
//     eventBus.emit('task')  // task2
// }, 1000)
// setTimeout(()=>{
//     eventBus.emit('task3')  // task2
// }, 2000)






// function myNew(fn, ...args){
//     let obj = {}
//     obj.__proto__ = fn.prototype
//     let res = fn.apply(obj, ...args)
//     return res instanceof Object? res: obj
// }




// function myInstanceof(left, right){
//     left = left.__proto__
//     while(left){
//         if(left !== right.prototype){
//             return false
//         }
//         left = left.__proto__
//     }
//     return true
// }