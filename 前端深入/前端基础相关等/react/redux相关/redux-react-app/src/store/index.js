import {createStore, combineReducers, applyMiddleware} from 'redux'

// 定义好了reducers，要组合起来用combineReducers

import courseTabListReducer from './reducers/courseTabList' 


// 异步的时候要用,ReduxThunk, applyMiddleware
import ReduxThunk from 'redux-thunk';


import courseTabListState from './states/courseTabList';

// 全部的reducers要组合起来
const allReducers = combineReducers({
    courseTabList: courseTabListReducer
})


// 注意参数
const store = createStore(allReducers, {
    courseTabList: courseTabListState
}, applyMiddleware(ReduxThunk));

export default store;


// reducer action  state    store.dispatch



