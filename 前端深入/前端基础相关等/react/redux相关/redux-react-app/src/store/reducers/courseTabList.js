import initialState from '../states/courseTabList';

export default function (state = initialState, action){
    switch(action.type){
        case 'CHANGE_COURSE_FIELD':
            return {
                // 防止还有别的参数
                ...state,
                curField: action.Field
            }
        default:
            return state;
    }
}