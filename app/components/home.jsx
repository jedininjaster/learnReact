import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import { requestQuote } from '../actions/quotes';

class Home extends Component {
  render() {
    return <div>
      <RaisedButton
        onTouchTap={this.onTouchTap}>
        What would Ron Swanson say?
      </RaisedButton>
      {this.renderQuotes()}
    </div>

  }

  renderQuotes(){
    return this.props.map(quote => <div>{quote}</div>);
  }

  onTouchTap() {
    this.props.requestQuote();
  }
}

const mapState = (state) => {
  return {
    quotes: state.quotes
  };
};

const mapDispatch = dispatch => ({
  requestQuote(){
    dispatch(requestQuote());
  }
});

export default connect(mapState, mapDispatch)(Home);
