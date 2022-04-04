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
            hide,
            // .的方式来执行的方法
            info, 
            success,
            warn,
            danger
        }
        

        function show(props, callback){  // 最后实现callback
            if(!messageBox){
                // 主角在这里 ！！！！！！！！！！！！！！！！！
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

                // 有回调则执行回调
                callback && callback();
            }
        }

        function hide(callback){
            document.body.removeChild(this.vm.$el);
            messageBox.$destroy();  // 实例销毁
            messageBox = null;
            this.vm = null;

            callback && callback();
        }

        // 实现可以.的方式
        function info(props, callback){
            this.show({ ...props, type: 'primary'}, callback)
        }

        function success(props, callback){
            this.show({ ...props, type: 'success'}, callback)
        }

        function warn(props, callback){
            this.show({ ...props, type: 'warn'}, callback)
        }

        function danger(props, callback){
            this.show({ ...props, type: 'danger'}, callback)
        }

    }
}