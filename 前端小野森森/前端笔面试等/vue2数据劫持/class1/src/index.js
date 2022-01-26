import Vue from '../vue';


let vm = new Vue({
    el: "#app",
    data(){
        return{
            title: '学生列表',
            classNum: 1,
            total: 2,
            teacher: ['张三', '李四'],
            info: {
                a: {
                    b: 1
                }
            },
            students: [
                {
                    id: 1,
                    name: '小红'
                },
                {
                    id: 2,
                    name: '小明'
                }
            ]
        }
    }
})

// 有了_data后，可以vm._data.title访问数据
// 为了可以vm.title访问，要有proxy.js代理
// console.log(vm._data.title)
// console.log(vm.title)

// console.log(vm.students[0])

// console.log(vm.info.a)  // 这种对象就能循环处理了
console.log(vm.info.a.b)

