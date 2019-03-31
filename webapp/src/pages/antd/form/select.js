import React, { Component } from 'react';
import { Select } from "antd";

class Demo extends Component {
  render() {
    return (
      <Select defaultValue="1">
        <Select.Option value="1">买了佛冷</Select.Option>
        <Select.Option value="2">why</Select.Option>
        <Select.Option value="3">哈哈哈哈哈</Select.Option>
      </Select>
    )
  }
}
export default Demo;