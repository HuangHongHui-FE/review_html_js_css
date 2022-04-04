
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入拓展文件
import {eventExtend} from './extents';
eventExtend(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
