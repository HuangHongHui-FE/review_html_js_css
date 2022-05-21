import Stars from './components/Stars'

const JSUI = {};


// 组件多的时候
const componentPool = [
    Stars
]

JSUI.install = function(Vue) {
    // Vue.component(Stars.name, Stars);  // 注册组件，组件名称，组件本身

    componentPool.forEach(component => {
        Vue.component(component.name, component);
    })
}

export default JSUI;