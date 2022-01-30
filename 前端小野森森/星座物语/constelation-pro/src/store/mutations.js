export default {
  setConsName (state, consName) {
    state.consName = consName;
  },
  setField (state, field) {
    state.field = field;
  },
  // 状态码的问题
  setErrorCode (state, errorCode) {
    state.errorCode = errorCode;
  },
  // 设置年月天的数据对应到state中
  setData (state, data) {
    state[state.field] = data;
  }
}