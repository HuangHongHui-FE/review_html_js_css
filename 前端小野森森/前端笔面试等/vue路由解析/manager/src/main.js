import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { generateRouter } from './libs/utils'

import "@/assets/css/common.css"
import store from './store'

router.beforeEach(async (to, from, next) => {
  if(!store.state.hasAuth){
    await store.dispatch('setUserRouters');
    const newRoutes = generateRouter(store.state.userRouters);
    router.addRoutes(newRoutes)
    next({path: to.path})
  }else{
    next();
  }
})


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
