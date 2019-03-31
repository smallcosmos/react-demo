import React, {Component} from 'react';
import { Radio } from "antd";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state={
            radioValue: '1'
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({radioValue: e.target.value});
    }
    render() {
        return (
            <Radio.Group value={this.state.radioValue} onChange={this.onChange}>
                <Radio value="1">买了佛冷</Radio>
                <Radio value="2">why</Radio>
                <Radio value="3">哈哈哈哈哈</Radio>
            </Radio.Group>
        )
    }
}
export default Demo;