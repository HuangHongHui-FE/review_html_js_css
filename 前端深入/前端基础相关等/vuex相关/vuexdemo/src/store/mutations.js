export default{
    setCurIdx(state, payload){
        const {index, text} = payload;
        state.curIdx = index;
    },

    setData(state, data){
        state.data = data
    }
}