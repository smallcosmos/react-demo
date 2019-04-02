import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

class MyRoutes extends Component {
  constructor(props) {
    super(props);
    this.history = props.history;
  }

  getComponent(path) {
    return Loadable({
      loader: () => import(`../pages${path}`),
      loading: () => <div>Loading ...</div>
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Redirect exact push from="/" to="/home/index" />
          <Route exact path="/antd/form" render={() => <Redirect to="/antd/form/input" />}>
          </Route>
          <Route exact path="/home/index" component={this.getComponent('/home/index')}>
          </Route>
        </Switch>

        <Switch>
          <Redirect exact push from="/antd/layout" to="/antd/layout/grid" />
          <Route exact path="/antd/layout/grid" component={this.getComponent('/antd/layout/grid')}>
          </Route>
        </Switch>

        <Switch>
          <Redirect exact push from="/redux" to="/redux/count" />
          <Route exact path="/redux/count" component={this.getComponent('/redux/count')}>
          </Route>
        </Switch>

        <Switch>
          <Redirect exact push from="/antd/nav" to="/antd/nav/affix" />
          <Route exact path="/antd/nav/affix" component={this.getComponent('/antd/nav/affix')}>
          </Route>
          <Route exact path="/antd/nav/breadcrumb" component={this.getComponent('/antd/nav/breadcrumb')}>
          </Route>
          <Route exact path="/antd/nav/dropdown" component={this.getComponent('/antd/nav/dropdown')}>
          </Route>
        </Switch>

        <Switch>
          <Redirect exact push from="/antd/form" to="/antd/form/input" />
          <Route exact path="/antd/form/input" component={this.getComponent('/antd/form/input')}>
          </Route>
          <Route exact path="/antd/form/select" component={this.getComponent('/antd/form/select')}>
          </Route>
          <Route exact path="/antd/form/radio" component={this.getComponent('/antd/form/radio')}>
          </Route>
          <Route exact path="/antd/form/checkbox" component={this.getComponent('/antd/form/checkbox')}>
          </Route>
          <Route exact path="/antd/form/cascader" component={this.getComponent('/antd/form/cascader')}>
          </Route>
          <Route exact path="/antd/form/form" component={this.getComponent('/antd/form/form')}>
          </Route>
        </Switch>
      </>
    )
  }
}

export default MyRoutes;
