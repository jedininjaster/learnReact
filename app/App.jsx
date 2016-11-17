import React, {Component} from 'react';
import {Router, hashHistory} from 'react-router';

import {connect} from 'react-redux';
import {toggleLeftNav} from './actions/navigation';

import './styles/main.scss';

import AppBar from 'material-ui/AppBar';
import LeftDrawer from './navigation/LeftDrawer.jsx';

import Home from './components/home.jsx';

const routes = [
  {
    path: '/',
    component: Home
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title here"
          onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
        />
        <LeftDrawer />
        {/*<Router history={hashHistory} routes={routes} />*/}
      </div>
    )
  }
}

function mapState(state) {
  return state.navigation;
}

const mapDispatch = (dispatch) => ({
  onLeftIconButtonTouchTap() {
    console.log('here');
    dispatch(toggleLeftNav())
  }
});

export default connect(mapState, mapDispatch)(App);

