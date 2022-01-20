// 负责引入调配小的组件

import React, { Component } from 'react'

// import { getCourseFields, getCourseList } from '../models/index'

import CourseField from '../components/CourseField'
import CourseList from '../components/CourseList'

// 最后用了
import {connect} from 'react-redux';
import state from '../../../../vuex相关/vuexdemo/src/store/counter1 copy/state';

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
export default class IndexPage extends Component {
    render() {
        const {curField} = this.props;

        return (
            <div className='page-wrapper'>
                123
                <CourseField />
                <CourseList />
            </div>
        );
    }
}

export default connect (
    function mapStateToProps(state){
        return{
            curField: state.courseTabList.curField
        }
        
    }
)(IndexPage);


