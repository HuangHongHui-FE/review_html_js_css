import {createStore, combineReducers, applyMiddleware} from 'redux'

// 定义好了reducers，要组合起来用combineReducers

import courseTabListReducer from './reducers/courseTabList' 
import courseTabListState from './states/courseTabList';

// 异步的时候要用,ReduxThunk, applyMiddleware
import ReduxThunk from 'redux-thunk';

// 全部的reducers要组合起来
const allReducers = combineReducers({
    courseTabList: courseTabListReducer
})


// 注意参数
const store = createStore(allReducers, {
    courseTabList: courseTabListState
}, applyMiddleware(ReduxThunk));  // applyMiddleware包裹下就可以支持异步

export default store;


// reducer action  state    store.dispatch



