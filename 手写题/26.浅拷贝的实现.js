const obj1 = {
    name: 'qianguyihao',
    age: 28,
    desc: 'hello world',
};

const obj2 = {
    name: '许嵩',
    sex: '男',
};

// 【关键代码】浅拷贝：把 obj1 赋值给 obj2。这行代码的返回值也是 obj2
Object.assign(obj2, obj1);

console.log(JSON.stringify(obj2));
console.log(obj2);
console.log(obj1);