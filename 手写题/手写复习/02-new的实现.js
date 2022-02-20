function myNew(fn, ...args){
    let obj = {}
    obj.__proto__ = fn.prototype
    let res = fn.apply(obj, args)
    // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
    return res instanceof Object ? res: obj
}

function Person(firtName, lastName) {
  this.firtName = firtName;
  this.lastName = lastName;

  return 'aa';
}


const tb = new Person('Chen', 'Tianbao');
console.log(tb);

const tb2 = myNew(Person, 'Chen', 'Tianbao');
console.log(tb2)