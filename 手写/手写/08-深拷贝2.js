function deepClone(target, map = new Map()){
    // 基本数据类型直接返回
    if(typeof target !== 'object'){return target}
    // 判断是数组还是对象
    const temp = Array.isArray(target) ? [] : {}
    if(map.get(target)){
        // 已存在则直接返回
        return map.get(target)
    }
    // 不存在则第一次设置
    map.set(target, temp)
    for(const key in target){
        // 递归
        temp[key] = deepClone(target[key], map)
    }
    return temp
}


const a = {
    name: 'sunshine_lin',
    age: 23,
    hobbies: { sports: '篮球', tv: '雍正王朝' },
    works: ['2020', '2021']
}
a.key = a // 环引用
const b = deepClone(a)
b.words = [111,111]

console.log(b)
console.log(a)

