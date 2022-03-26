// 组件的扩展
import _MessageBox from './MessageBox';

export default {
    install(Vue){
        let messageBox = null;

        // 全局注册为组件
        Vue.component(_MessageBox.name, _MessageBox);
        
        // 在组件里面就可以直接this.$messageBox来使用
        Vue.prototype.$messageBox = {
            show,
            hide
        }
        

        function show(props){
            if(!messageBox){
                const MessageBox = Vue.extend({
                    render(h){
                        return h('message-box', {
                            props
                        });
                    }
                });
                // 实例化, 实例可以继承Vue的
                messageBox = new MessageBox();

                this.vm = messageBox.$mount();  // 跟main.js里new Vue是一样的
                document.body.appendChild(this.vm.$el);
            }
        }

        function hide(){
            document.body.removeChild(this.vm.$el);
            messageBox.$destroy();  // 实例销毁
            messageBox = null;
            this.vm = null;
        }
    }
}