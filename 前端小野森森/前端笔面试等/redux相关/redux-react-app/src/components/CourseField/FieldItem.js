import React, {Component} from "react";

export default class FieldItem extends Component {
    render(){
        const { item } = this.props;

        return (
            <span className="field-item">
                {item.field_name}
            </span>
        );
    }
}