import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends Component{
  render(){
    return <RaisedButton
    onTouchTap={this.onTouchTap}>
    It works!
    </RaisedButton>
  }

  onTouchTap(){
    alert('touch tap');
  }
}