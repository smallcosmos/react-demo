import React, {Component} from 'react';
import { Input, AutoComplete } from "antd";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue: 'input111',
            dataSource: []
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onChangeInput(e) {
        this.setState({inputValue: e.target.value});
    }
    onSearch(value) {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value
            ]
        })
    }

    render() {
        return (
            <>
            <Input value={this.state.inputValue} onChange={this.onChangeInput}></Input>
            <AutoComplete dataSource={this.state.dataSource} onSearch={this.onSearch}></AutoComplete>
            </>
        )
    }
}
export default Demo;