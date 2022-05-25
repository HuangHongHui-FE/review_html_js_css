// 负责引入调配小的组件

import React, { Component } from 'react'

// import { getCourseFields, getCourseList } from '../models/index'

import CourseField from '../components/CourseField'
import CourseList from '../components/CourseList'

// 最后用了,// 想要使用app.js包裹的store，必须
import {connect} from 'react-redux';

import { changeCourseField } from '../store/actions/courseTabList'

// export default class IndexPage extends Component {
//     // async getDatas () {
//     //     const courseFieldData = await getCourseFields(),
//     //         courseData = await getCourseList();
        
//     //     console.log(courseData, courseFieldData)
//     // }

//     // componentDidMount (){
//     //     this.getDatas();
//     // }
//     render() {

//         return (
//             <div className='page-wrapper'>
//                 123
//                 <CourseField />
//                 <CourseList />
//             </div>
//         );
//     }
// }


// 用redux时
class IndexPage extends Component {
    render() {
        const {curField, changeCourseField} = this.props;  // connect已传进props这两个东西了

        return (
            <div className='page-wrapper'>
                <CourseField curField={curField} changeCourseField={changeCourseField} />
                <CourseList curField={curField}  />
            </div>
        );
    }
}

// 想要使用app.js包裹的store，必须
export default connect (
    // 遍历state到props
    function mapStateToProps(state){
        return{
            curField: state.courseTabList.curField
        }
    },

    // 通过调用store里的action更改state
    function mapDispatchToProps(dispatch){
        return {
            changeCourseField: (field) => dispatch(changeCourseField(field))
        }
    }
)(IndexPage);


