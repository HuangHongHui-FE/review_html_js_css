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

    render(){
        const {courseData} = this.state;
        return (
            
            <div className='course-wrapper'>
                <ul className='course-list'>
                    {
                        courseData.map((item, index) => {
                            return (
                                <CourseItem 
                                    key={index}
                                    item={item}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}