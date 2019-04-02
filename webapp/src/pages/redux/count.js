import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import {countChange} from '../../store/actions/counter';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.onAddClick = props.onAddClick.bind(this);
    this.onMinusClick = props.onMinusClick.bind(this);
  }
  onAddClick() {
    console.log('add click');
  }

  onMinusClick() {
    console.log('minus click');
  }

  render() {
    return (
      <>
        <h1>{this.props.count}</h1>
        <Button onClick={this.onAddClick}>加一</Button>
        <Button onClick={this.onMinusClick}>减一</Button>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddClick() {
      console.log('dispatch add click');
      dispatch(countChange('add'))
    },
    onMinusClick() {
      console.log('dispatch minus click');
      dispatch(countChange('minus'))
    }
  }
}

Demo = connect(mapStateToProps, mapDispatchToProps)(Demo);

export default Demo;