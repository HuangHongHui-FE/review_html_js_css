import {initState} from './init'


function Vue(options){
    this._init(options)
}

// 初始化
Vue.prototype._init = function(options){
    var vm = this;
    vm.$options = options;

    // 初始化状态,实例传过去
    initState(vm);
}

export default Vue;