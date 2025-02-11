import axios from 'axios';

import { JUHE_APPKEY } from '@/configs/keys';


// axios的封装
function axiosGet(options) {
  axios(options.url + "&key=" + JUHE_APPKEY)
    .then((res) => {
      options.success(res.data);
    })
    .catch((err) => {
      options.error(err);
    });
}

export {
  axiosGet
}