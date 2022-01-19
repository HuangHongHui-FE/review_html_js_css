import axios from 'axios';
export default{
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
}