import axios from "axios";

import JUHE_APPKEY from '@/configs/keys';

// 封装get请求
function axiosGet(options){
    axios(options.url + '&key' + JUHE_APPKEY)
        .then((res) => {
            options.success(res);
        })
        .catch((err) => {
            options.error(err)
        })
}

export {
    axiosGet
}

