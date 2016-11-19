import React, {Component} from 'react';
import {connect} from 'react-redux';
import DataViewer from '../components/DataViewer.jsx';

import {requestData} from '../actions/GOTActions';

class Home extends Component {
  constructor(props) {
    super(props);

    console.log('con');

    this.onUrlClick = this.onUrlClick.bind(this);
    this.props.requestData('http://www.anapioficeandfire.com/api/', 'root');
  }

  render() {
    return <DataViewer
      data={this.props.data}
      status={this.props.status}
      collection={this.props.collection}
      onUrlClick={this.onUrlClick} />;
  }

  onUrlClick(url, collection) {
    this.props.requestData(url, collection);
  }
}

const mapState = (state) => {
  return {
    data: state.GOTData.data,
    status: state.GOTData.status,
    collection: state.GOTData.collection,
  };
};

const mapDispatch = dispatch => ({
  requestData(url, collection){
    console.log(collection);
    dispatch(requestData(url, collection));
  }
});

export default connect(mapState, mapDispatch)(Home);
