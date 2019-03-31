import React from 'react';
import { Dropdown, Menu } from 'antd';

function Demo(props) {
  const menus = (
    <Menu>
      <Menu.Item>买了佛冷</Menu.Item>
      <Menu.Item>why</Menu.Item>
      <Menu.Item>哈哈哈哈哈</Menu.Item>
    </Menu>
  )
  return (
    <>
      <Dropdown overlay={menus}>
        <a href="javascript:;">Hover me</a>
      </Dropdown>
      <br />
      <br />
      <Dropdown.Button overlay={menus} type="primary" trigger={["hover"]}>
        <a href="javascript:;">保存</a>
      </Dropdown.Button>
    </>
  )
}

export default Demo;