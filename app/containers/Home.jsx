import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import DataViewer from '../components/DataViewer.jsx';

import {requestData} from '../actions/GOTActions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onUrlClick = this.onUrlClick.bind(this);
    this.props.requestData('http://www.anapioficeandfire.com/api/');
  }

  render() {
    return <div>
      {JSON.stringify(this.props.GOTData)}
    </div>;
    {/*return <DataViewer data={this.props.data} onUrlClick={this.onUrlClick} />*/}
  }

  onUrlClick(url) {
    console.log(url);
    this.props.requestData(url);
  }
}

const mapState = (state) => {
  console.log(state);
  return {
    GOTData: state.GOTData
  };
};

const mapDispatch = dispatch => ({
  requestData(url){
    dispatch(requestData(url));
  }
});

export default connect(mapState, mapDispatch)(Home);
