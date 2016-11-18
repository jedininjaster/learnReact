import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleLeftNav } from '../actions/navigationActions';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const SelectableList = makeSelectable(List);

class LeftDrawer extends Component{
  render(){
    return (
      <div>
        <Drawer open={this.props.leftDrawerOpen}>
          <AppBar
            iconElementLeft={<IconButton onTouchTap={this.props.onClearClick}><Clear /></IconButton>}
          />
          <DropDownMenu value={"menu"} style={{width: 181}}>
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
            {/*<RefreshIndicator*/}
              {/*size={40}*/}
              {/*left={10}*/}
              {/*top={0}*/}
              {/*status="loading"*/}
            {/*/>*/}
          </DropDownMenu>
          <SelectableList defaultValue={3}>
            <Subheader>Selectable Contacts</Subheader>
            <ListItem
              value={1}
              primaryText="Brendan Lim"
              nestedItems={[
                <ListItem
                  value={2}
                  primaryText="Grace Ng"
                />,
              ]}
            />
            <ListItem
              value={3}
              primaryText="Kerem Suer"
            />
            <ListItem
              value={4}
              primaryText="Eric Hoffman"
            />
            <ListItem
              value={5}
              primaryText="Raquel Parrado"
            />
          </SelectableList>
        </Drawer>
      </div>
    )
  }
}

function mapState(state) {
  return state.navigation;
}

const mapDispatch = (dispatch) => ({
  onClearClick() {
    dispatch(toggleLeftNav())
  }
});

export default connect(mapState, mapDispatch)(LeftDrawer);