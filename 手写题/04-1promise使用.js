let p1 = new Promise((resolve, reject) => {
    resolve('成功')
    reject('失败')
})
console.log('p1', p1)

let p2 = new Promise((resolve, reject) => {
    reject('失败')
    resolve('成功')
})
console.log('p2', p2)

let p3e = new Promise((resolve, reject) => {
    throw('报错')
})
console.log('p3', p3)

// 1、执行了resolve，Promise状态会变成fulfilled
// 2、执行了reject，Promise状态会变成rejected
// 3、Promise只以第一次为准，第一次成功就永久为fulfilled，第一次失败就永远状态为rejected
// 4、Promise中有throw的话，就相当于执行了reject 