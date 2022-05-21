import Vue from 'vue'
import App from './App.vue';

import { MessageBox } from './components/MyUI';  // 结构导入
Vue.use(MessageBox)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
