import React, {Component} from 'react';
import { Checkbox } from "antd";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        console.log('checked: ', e.target.checked);
        this.setState({
            checked: e.target.checked
        });
    }

    render() {
        return (
            <Checkbox value={this.state.checked} onChange={this.onChange}>Checkbox</Checkbox>
        )
    }
}
export default Demo;