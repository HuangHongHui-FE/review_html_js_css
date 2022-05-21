import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import counter1 from './counter1';
import counter2 from './counter2';
Vue.use(Vuex)

export default new Vuex.Store({
  // 存数据
  state,

  // 处理逻辑
  mutations,

  // 数据经过处理后再给到页面data，就用getters
  getters,

  // 异步的处理
  actions,

  // 处理大型项目，分块counter1, counter2
  modules: {
    counter1,
    counter2
  }
})
