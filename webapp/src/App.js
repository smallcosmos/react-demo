import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Layout, Menu } from 'antd';
import './assert/style/App.css';
import menuList from './menuConfig';

const { Sider, Header, Content, Footer } = Layout;
class App extends Component {
  onMenuClick(e) {
    console.log(e, this)
  }

  render() {
    return (
      <Router>
        <Layout style={{ height: '100vh' }}>
          <Sider theme="light">
            <Menu
              className="app-menu"
              onClick={this.onMenuClick}
              mode="inline">
              {
                menuList && menuList.map((menu, index) =>
                  <Menu.SubMenu key={index} title={menu.title}>
                    {
                      menu.children && menu.children.map((item, jndex) =>
                        <Menu.Item key={jndex}><Link to={item.url}>{item.title}</Link></Menu.Item>
                      )
                    }
                  </Menu.SubMenu>
                )
              }
            </Menu>
          </Sider>
          <Layout>
            <Header className="app-header">
              Ant Design Demo
          </Header>
            <Content className="app-content">
              <Route exact path="/" component={getComponent('/home/index')}/>
              <Route exact path="/antd/form" render={() => <Redirect to="/antd/form/input" />}>
              </Route>
              <Route exact path="/react/home/index" component={getComponent('/home/index')}>
              </Route>
              <Route exact path="/antd/form/input" component={getComponent('/antd/form/input')}>
              </Route>
              <Route exact path="/antd/form/select" component={getComponent('/antd/form/select')}>
              </Route>
              <Route exact path="/antd/form/radio" component={getComponent('/antd/form/radio')}>
              </Route>
              <Route exact path="/antd/form/checkbox" component={getComponent('/antd/form/checkbox')}>
              </Route>
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

function getComponent(path) {
  return Loadable({
    loader: () => import(`./pages${path}`),
    loading: () => <div>Loading ...</div>
  });
}

export default App;