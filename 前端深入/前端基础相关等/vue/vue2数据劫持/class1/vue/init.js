import proxyData from "./proxy";  // 数据代理
import observe from "./observe";  // 数据观察处理

function initState(vm){
    // console.log(vm)
    var options = vm.$options;

    if(options.data){
        initData(vm);
    }
}

function initData(vm){
    var data = vm.$options.data;  // 临时的data，而不改变用户传递过来的data
    // 这里是因为src下写data有不同的写法
    data = vm._data = typeof data === 'function' ? data.call(vm): data || {}

    // 代理
    for(var key in data){
        proxyData(vm, '_data', key);
    }

    observe(vm._data);  // 观察者模式
}

export {
    initState
}