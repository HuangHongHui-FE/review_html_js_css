// 整个数据请求的逻辑封装到这里

import { getData } from './request';

export default async (store) => {
  const consName = store.state.consName,
        field = store.state.field,
        // 这里才是真正获取的数据
        data = await getData(consName, field);
  
  if (data.error_code) {
    store.commit("setErrorCode", data.error_code);
    return;
  }

  store.commit('setData', data);
}