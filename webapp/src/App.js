import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout, Menu, Icon } from 'antd';
import './assert/style/App.css';

import Routes from './router';
import menuList from './menuConfig';

const { Sider, Header, Content, Footer } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.icons = ['mail', 'paper-clip', 'picture', 'hdd', 'appstore', 'tablet', 'tags', 'home'];
    this.state = {
      defaultOpend: [],
      defaultSelected: []
    }
  }

  onMenuClick(e) {
    //todo
    console.log(e, this)
  }

  componentDidMount() {
    const selected = this.findMenuSelected();
    this.setState(selected);
  }

  findMenuSelected() {
    const path = this.history.location.pathname;
    let defaultOpend = [];
    let defaultSelected = []; 
    menuList.forEach((menu, index) => {
      if(menu.url === path) {
        defaultOpend = [];
        defaultSelected = ['sub' + index];
        return;
      }
      menu.children && menu.children.forEach((item, jndex) => {
        if(item.url === path) {
          defaultOpend = ['sub' + index];
          defaultSelected = ['sub' + index + 'item' + jndex];
          return;
        }
      });
    });
    return {
      defaultOpend,
      defaultSelected
    }
  }

  render() {
    return (
      <Router history={this.history}>
        <Layout className="app-layout">
          <Sider className="app-sider" theme="light">
            <Menu
              className="app-menu"
              mode="inline"
              onClick={this.onMenuClick}
            >
              {
                menuList && menuList.map((menu, index) =>
                  !menu.children || !menu.children ?
                  <Menu.Item key={'sub' + index}>
                    <Link to={menu.url}><Icon type={this.icons[index%this.icons.length]}></Icon>{menu.title}</Link>
                  </Menu.Item> : 
                  <Menu.SubMenu
                    key={'sub' + index}
                    title={<span><Icon type={this.icons[index%this.icons.length]}></Icon><span>{menu.title}</span></span>}
                  >
                    {
                      menu.children.map((item, jndex) =>
                        <Menu.Item key={'sub' + index + 'item' + jndex}>
                          <Link to={item.url}>{item.title}</Link>
                        </Menu.Item>
                      )
                    }
                  </Menu.SubMenu>
                )
              }
            </Menu>
          </Sider>
          <Layout className="app-main">
            <Header className="app-header">
              <span className="app-header__title">Ant Design Demo</span>
          </Header>
            <Content className="app-content">
              <Routes />
            </Content>
            <Footer className="app-footer">
              My React Demo
          </Footer>
          </Layout>
        </Layout >
      </Router>
    );
  }
}

export default App;