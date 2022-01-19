import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios';
export default new Vuex.Store({
  state: {
    curIdx: 0,
    name: '宵夜神恶神',
    age: 34,
    data: []
  },

  mutations: {
    setCurIdx(state, payload){
      const {index, text} = payload;
      state.curIdx = index;
    },

    setData(state, data){
      state.data = data
    }
  },

  // 数据经过处理后再给到页面data，就用getters
  getters: {
    getMyInfo (state) {
      return `我的名字是${state.name}，今年${state.age}岁。`;
    }
  },

  // 异步的处理
  actions: {
    getData (ctx, payload) {
      const {key, testType, model, subject} = payload;

      axios(
        `/api/jztk/query?model=${model}&subject=${subject}&testType=${testType}$key=${key}`
      ).then((res) => {
        // console.log(res);

        // 触发mutations里的steData
        ctx.commit('setData', res.data.result);
      })
    }
  },

  modules: {

  }
})
