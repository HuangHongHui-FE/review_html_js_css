import React, {Component} from "react";

export default class CourseItem extends Component {
    render(){
        const { item } = this.props;

        return (
            <li className="course-item">
                {item.course_name}
            </li>
        );
    }
}