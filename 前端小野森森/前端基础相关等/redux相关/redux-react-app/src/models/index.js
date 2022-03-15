// 异步获取数据的函数在这里编写

import { axiosGet } from '../utils/http'

function getCourseFields() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/v2/get_course_fields',
            success(data) {
                resolve(data.result);
            },
            error(err){
                reject(err);
            }
        })
    })
}

// 课程列表
function getCourseList(){
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/v2/get_courses/all',
            success(data) {
                resolve(data.result)
            },
            error(err){
                reject(err);
            }
        })
    })
}

export {
    getCourseFields,
    getCourseList

}