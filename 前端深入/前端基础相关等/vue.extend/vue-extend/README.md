# vue-extend

Vue.extend
vue2.x中，创建一个基于vue构造函数的子类，参数是包含组件选项的对象。

就是一个构造器：
    
    var Contructor = Vue.extend({
        name: '',
        components: {},
        props: {},
        render: h => h()
    });
    
    new Contructor();





#### 以vue组件的形式进行封装
