import Vue from 'vue'
import App from './App.vue'

import MyUI from '@/libs/MyUI'


Vue.mixin(MyUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
