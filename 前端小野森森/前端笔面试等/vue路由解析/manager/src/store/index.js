import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存数据
  state,

  // 处理逻辑
  mutations,

  // 异步的处理
  actions
})
