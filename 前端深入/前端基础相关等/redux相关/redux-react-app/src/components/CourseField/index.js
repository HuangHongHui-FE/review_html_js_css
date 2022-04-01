// 页面，获取数据也在这里，并调配item

import React, {Component} from 'react'

import {getCourseFields} from '../../models'
// 更小的组件
import FieldItem from './FieldItem';

import './index.css';
export default class CourseField extends Component {
    state= {
        fieldData: []
    }

    async getFieldsData (){
        const fieldData = await getCourseFields();

        this.setState({
            fieldData
        })
    }

    componentDidMount() {
        this.getFieldsData();
    }

    render(){
        const {fieldData} = this.state;
        return (
            // jsx
            <div className="field-wrapper">

                <FieldItem 
                    key={'-1'}
                    item={{field: '-1', fiels_name: '全部课程'}}
                />

                {
                    fieldData.map((item, index) => {
                        return (
                            // jsx
                            <FieldItem 
                                key={index}
                                item={item}
                            />
                        );
                    })
                }
            </div>
            // 循环渲染组件FieldItem
        )
    }
}