// Object.defineProperty()   定义属性

// (obj, prop, descriptor)


function defineProperty() {
    var _obj = {};

    // 定义单个属性
    // Object.defineProperty(_obj, 'a', {
    //     value: 1
    // });
    // 定义多个属性
    Object.defineProperties(_obj, {
        a: {
            value: 1
        },
        b: {
            value: 2
        }
    });
    return _obj;
}


var obj = defineProperty();
console.log(obj)

// 等同于
var obj = {}
obj.a = 1
