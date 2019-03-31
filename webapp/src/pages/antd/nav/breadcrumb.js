import React from 'react';
import { Breadcrumb } from 'antd';

function Demo(props) {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
            Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            Breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default Demo;