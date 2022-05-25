const CHANGE_COURSE_FIELD = "CHANGE_COURSE_FIELD"

function changeCourseField(field){
    return {
        type: CHANGE_COURSE_FIELD,
        field   // 要更改的数据
    }
}

export {
    changeCourseField
}