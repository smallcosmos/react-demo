import React, { Component } from 'react';
import { Cascader } from "antd";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: [{
        label: '买了佛冷',
        value: 1,
        children: [{
          label: '买了佛冷',
          value: 1,
          children: null
        }, {
          label: 'why',
          value: 2,
          children: null
        }, {
          label: '哈哈哈哈哈',
          value: 3,
          children: null
        }]
      }, {
        label: 'why',
        value: 2,
        children: null
      }, {
        label: '哈哈哈哈哈',
        value: 3,
        children: null
      }]
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      value: e
    });
  }

  render() {
    return (
      <Cascader value={this.state.value} options={this.state.options} allowClear expandTrigger="hover" onChange={this.onChange}></Cascader>
    )
  }
}
export default Demo;