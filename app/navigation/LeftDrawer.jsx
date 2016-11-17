import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleLeftNav } from '../actions/navigation';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';

class LeftDrawer extends Component{
  render(){
    console.log(this.props);
    return (
      <div>
        <Drawer open={this.props.leftDrawerOpen}>
          <AppBar
            iconElementLeft={<IconButton onTouchTap={this.props.onClearClick}><Clear /></IconButton>}
          />
          <MenuItem>item 1</MenuItem>
          <MenuItem>item 2</MenuItem>
          <MenuItem>item 3</MenuItem>
        </Drawer>
      </div>
    )
  }
}

function mapState(state) {
  console.log(state);
  return state.navigation;
}

const mapDispatch = (dispatch) => ({
  onClearClick() {
    console.log('LeftDrawer');
    dispatch(toggleLeftNav())
  }
});

export default connect(mapState, mapDispatch)(LeftDrawer);