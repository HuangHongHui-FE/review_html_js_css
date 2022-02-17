// function deepClone(obj, cache = new WeakMap()){
//     if(typeof obj !== 'object') return obj
//     if(obj === null) return obj
//     if(cache.has(obj)) return cache.get(obj)  // 防止循环引用，程序进入死循环
    

//     // 找到所属原型上的contructor， 所属原型上的constructor指向当前对象的构造函数
//     let cloneObj = new obj.constructor()
//     cache.set(obj, cloneObj)  // 缓存拷贝的对象，用于处理循环引用的情况
//     for (let key in obj){
//         if(obj.hasOwnProperty(key)){
//             cloneObj[key] = deepClone(obj[key], cache)  // 递归拷贝
//         }
//     }
//     return cloneObj
// }


// // 测试
// const obj = {name: 'jack', address: {x: 100, y: 200}}
// obj.a = obj  // 循环引用
// const newObj = deepClone(obj)
// console.log(newObj.address === obj.address)  // false






function deepCopy(target) {
  let result;

  if (typeof target === 'object') {
    // 数组
    if (Array.isArray(target)) {
      result = [];
      for (let i in target) {
        result.push(deepCopy(target[i]));
      }
    } else if (target === null) {
      result = null;
    } else {
      result = {};
      for (let key in target) {
        result[key] = deepCopy(target[key]);
      }
    }
  } else {
    result = target;
  }

  return result;
}

let obj = {
  a: 1,
  b: { c: 2 },
  d: [3, 4, 5]
}

let res = deepCopy(obj);
obj['d'][1] = 100;
console.log(res, obj);