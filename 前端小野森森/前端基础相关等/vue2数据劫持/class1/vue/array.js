// 处理array，更改原数组的方法
import { ARR_METHODS } from './config'

import observeArr from './obserceArr'
var originArrMethods = Array.prototype,
    arrMethods = Object.create(originArrMethods)


ARR_METHODS.map(function (m){
    // 每一个方法都进行重写
    arrMethods[m] = function(){
        // 把arguments变成数组参数
        var args = Array.prototype.slice.call(arguments),
            rt = originArrMethods[m].apply(this, args);

        // 重写的数组方法，不仅可以执行原来的操作，也可以其他
        var newArr;
        // 新增的参数作响应式
        switch(m) {
            case 'push':
            case 'unshift':
                newArr = args
            case 'splice':
                newArr = args.slice(2);
                break;
            default:
                break;
        }

        newArr && observeArr(newArr);
        return rt;
    }
})

export {
    arrMethods
}