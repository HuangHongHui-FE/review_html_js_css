// // 支持多参数传递
// function progressCurrying(fn, args) {

//     var _this = this
//     var len = fn.length;
//     var args = args || [];

//     return function() {
//         var _args = Array.prototype.slice.call(arguments);
//         console.log(_args)
//         Array.prototype.push.apply(args, _args);

//         // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
//         if (_args.length < len) {
//             return progressCurrying.call(_this, fn, _args);
//         }

//         // 参数收集完毕，则执行fn
//         return fn.apply(this, _args);
//     }
// }

// function fn(name){
//     // console.log(name)
//     return name
// }

// console.log(progressCurrying(fn)(1,3))



// 简单封装
// var currying = function(fn) {
//     // args 获取第一个方法内的全部参数
//     var args = Array.prototype.slice.call(arguments, 1)
//     return function() {
//         // 将后面方法里的全部参数和args进行合并
//         var newArgs = args.concat(Array.prototype.slice.call(arguments))
//         // 把合并后的参数通过apply作为fn的参数并执行
//         return fn.apply(this, newArgs)
//     }
// }






// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // let _args = [...arguments]
    console.log(_args)
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)               // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9