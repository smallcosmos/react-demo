import React from 'react';
import { Affix } from 'antd';

function Demo(props) {
  return (
    <>
      <Affix offsetTop={10} target={() => document.getElementsByClassName('app-main')[0]}>
        <h1 style={{background: '#1890ff'}}>I am Affix ^_^</h1>
      </Affix>
      {new Array(100).fill(0).map((item, index) => <h1 key={index}>{item + index}</h1>)}
    </>
  )
}

export default Demo;