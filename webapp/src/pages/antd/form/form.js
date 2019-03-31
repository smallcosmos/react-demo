import React, { Component } from 'react';
import { Input, Select, Button, Form, Row, Col } from "antd";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'horizontal'
    }
    this.setLayoutMode = this.setLayoutMode.bind(this);
    this.customValidate = this.customValidate.bind(this);
    this.submit = this.submit.bind(this);
  }

  setLayoutMode(value) {
    this.setState({
      layout: value
    });
  }
  customValidate(rule, value, callback) {
    callback();
  }
  async submit() {
    await this.props.form.validateFields();
    const params = this.props.form.getFieldsValue();
    console.log('submit', params);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Form layout={this.state.layout} labelAlign="right" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Row>
            <Col span={8}>
              <Form.Item label="Username:" help="字母和数字">
                {getFieldDecorator('username', {
                  rules: [{
                    required: true, message: 'Please input!',
                  }, {
                    validator: this.customValidate,
                  }],
                })(
                  <Input placeholder="请输入"></Input>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Number:" help="数字">
                {getFieldDecorator('number', {
                  rules: [{
                    required: true, message: 'please input!',
                  }, {
                    validator: this.customValidate,
                  }],
                })(
                  <Input placeholder="请输入"></Input>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Password:" help="字母和数字">
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'please input!',
                  }, {
                    validator: this.customValidate,
                  }],
                })(
                  <Select placeholder="请输入">
                    <Select.Option value="1">买了佛冷</Select.Option>
                    <Select.Option value="2">why</Select.Option>
                    <Select.Option value="3">哈哈哈哈哈</Select.Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Button onClick={this.submit}>提交</Button>
        </Form>

        <Button onClick={() => { this.setLayoutMode('inline') }}>Inline</Button>
        <Button onClick={() => { this.setLayoutMode('horizontal') }}>Horizontal</Button>
        <Button onClick={() => { this.setLayoutMode('vertical') }}>vertical</Button>
      </>
    )
  }
}

Demo = Form.create({})(Demo);
export default Demo;