import defineReactiveData from './reactive'
import {arrMethods} from './array'

import observeArr from './obserceArr';

function Observer(data){
    if(Array.isArray(data)) {
        // 处理data为【】的问题
        data.__prototype__ = arrMethods
        // console.log(data)
        observeArr(data);  // 进行递归
    } else {
        // 处理data为对象的问题
        this.walk(data);
    }
}

Observer.prototype.walk = function(data) {
    var keys = Object.keys(data);

    // console.log(keys);
    for(var i = 0; i<keys.length; i++){
        var key = keys[i],
            value = data[key];

        // 有了数据,数据做响应式
        defineReactiveData(data, key, value)
    }
}

// {}  defineProperty
// []  自己去写方法

export default Observer