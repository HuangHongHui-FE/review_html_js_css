import React, {Component} from 'react'
import { getCourseList } from '../../models'

import CourseItem from './CourseItem';
 
export default class CourseList extends Component {

    state = {
        courseData: []
    }

    async getCourseData() {
        const courseData = await getCourseList();
        this.setState({
            courseData
        })
    }

    componentDidMount(){
        this.getCourseData();
    }

    // 事先处理数据的
    filterData(data, field){
        if(field === '-1'){
            return data;
        }
        return data.filter(item => item.field === field)
    }

    render(){
        const {courseData} = this.state, {curField} = this.props;
        return (
            
            <div className='course-wrapper'>
                <ul className='course-list'>
                    {
                        // courseData.map((item, index) => {
                        this.filterData(courseData, curField).map(item => {
                            return (
                                <CourseItem key={index} item={item} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}