import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
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
  }

  handleClick() {
    this.setState(prevState => ({warning: !prevState.warning}));
  }

  render() {
    return (
      <div>
        <WarningBanner warning={this.state.warning}></WarningBanner>
        <button onClick={this.handleClick}>
          {this.state.warning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

class NumberList extends Component {
  render() {
    const list = [1,2,3,4];
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
    const list = [1,2,3,4];
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

export default WarningRender;
export { App, HelloWord, Clock, EventParent, LoginControl, WarningRender, NumberList, NumberList2 };
