export default function(Vue){
    // 对事件进行扩展
    Vue.prototype.$eventDispatch = function(name, value){
        let parent = this.$parent;
        while(parent){
            parent.$emit(name, value);
            parent = parent.$parent;
        }
    }

    Vue.prototype.$eventBroadcast = function(name, value) {
        const bc = (children) => {
            children.map((c) => {
                c.$emit(name, value);
                if(c.$children) {
                    bc(c.children);
                }
            })
        }
        bc(this.$children)
    }


    Vue.prototype.$eventBus = new Vue();

    
}