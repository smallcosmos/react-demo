import React, {Component} from 'react';
import { Input } from "antd";

class InputDemo extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue: 'input111'
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(e) {
        this.setState({inputValue: e.target.value});
    }

    render() {
        return (
            <Input value={this.state.inputValue} onChange={this.onChangeInput}></Input>
        )
    }
}
export default InputDemo;