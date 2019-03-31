import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material-ui
// import Button from '@material-ui/core/Button';

// ant-design ui
import { Button } from 'antd';
// 通过修改webpack配置，引入动态加载，使用上述组件引入方式解决样式动态加载问题
// import Button from 'antd/lib/button';

import '../assert/style/App.css';

class HelloWord extends Component {
  render() {
    return (
      <div>hello world</div>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <h1>{this.state.date.toLocaleTimeString()}</h1>
    )
  }
}

class EventSub extends Component {
  onClick() {
    // this.$emit('subClick');
  }

  render() {
    return (
      <button onClick={this.onClick}>trigger event</button>
    )
  }
}

class EventParent extends Component {
  subClick() {
    console.log('subClick');
  }

  render() {
    return (
      <EventSub subClick={this.subClick}></EventSub>
    )
  }
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLogin: true });
  }

  handleLogout() {
    this.setState({ isLogin: false });
  }

  render() {
    let button;
    if (this.state.isLogin) {
      button = <button onClick={this.handleLogout}>Logout</button>
    } else {
      button = <button onClick={this.handleLogin}>Login</button>
    }
    return (
      <div>
        {button}
      </div>
    )
  }
}

class WarningBanner extends Component {
  render() {
    if (!this.props.warning) {
      return null;
    }
    return (
      <div>
        <h1>Warning</h1>
      </div>
    )
  }
}
WarningBanner.defaultProps = {
  warning: false
}
WarningBanner.propTypes = {
  warning: PropTypes.bool
}

class WarningRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.ref = React.createRef();
  }

  handleClick() {
    this.setState(prevState => ({ warning: !prevState.warning }));
  }

  render() {
    return (
      <div>
        {/* ref接收一个回调函数，在组件加载或卸载时调用；}
        {/* 在原生标签上使用ref时，回调接受dom元素作为参数；在组件上使用ref时，回调接受组件实例作为参数 */}
        <WarningBanner ref={this.ref} warning={this.state.warning}></WarningBanner>
        <button onClick={this.handleClick}>
          {this.state.warning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

class NumberList extends Component {
  render() {
    const list = [1, 2, 3, 4];
    const dom = list.map((item, index) => {
      return <h1 key={index}>{item}</h1>
    });
    return (
      <div>
        {dom}
      </div>
    )
  }
}

class NumberList2 extends Component {
  render() {
    const list = [1, 2, 3, 4];
    return (
      <div>
        {
          list.map((item, index) => {
            return <h1 key={index}>{item}</h1>
          })
        }
      </div>
    )
  }
}

class MaterialButton extends Component {
  render() {
    return (
      <Button color="primary" variant="contained">
        Material UI Button
      </Button>
    )
  }
}

class AntdButton extends Component {
  render() {
    return (
      <Button type="primary">
        Antd UI Button
      </Button>
    )
  }
}

export default AntdButton;
export {
  HelloWord,
  Clock,
  EventParent,
  LoginControl,
  WarningRender,
  NumberList,
  NumberList2,
  MaterialButton
};
