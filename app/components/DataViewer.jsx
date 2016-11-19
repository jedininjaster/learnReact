import React, {Component} from 'react';
import {ListItem, List, Subheader} from 'material-ui';

export default class DataViewer extends Component {
  constructor(props) {
    super(props);
    this.renderData = this.renderData.bind(this);
    this.renderArray = this.renderArray.bind(this);
    this.renderObject = this.renderObject.bind(this);
  }

  render() {
    if(!this.props.data){
      return <div>loading</div>
    }
    return <List>
      {this.renderData(this.props.data)}
    </List>;
  }

  renderData(data) {
    console.log(this.props);
    if (Array.isArray(data)) {
      return this.renderArray(data, this.props.collection);
    } else {
      return this.renderObject(data, this.props.collection);
    }
  }

  renderArray(arr, key) {
    const nestedItems = arr.map(item => this.renderItem(item, key));
    return <ListItem key={key} primaryText={key} nestedItems={nestedItems} />
  }

  renderObject(obj) {
    return Object.keys(obj).map((key) => {
      return this.renderItem(obj[key], key);
    });
  }

  renderItem(value, key) {
    if (this.stringIsUrl(value)) {
      return <ListItem key={key + value} onClick={() => {
        this.props.onUrlClick(value, key)
      }}>{key}: {value}</ListItem>;
    } else if (Array.isArray(value)) {
      return this.renderArray(value, key);
    } else if (typeof value === 'object') {
      return <ListItem key={value.url} onClick={() => {
        this.props.onUrlClick(value.url, key)
      }}>{value.name}: {value.url}</ListItem>;
    } else {
      return <ListItem key={key}>{key}: {JSON.stringify(value)}</ListItem>;
    }
  }

  stringIsUrl(string) {
    return typeof string === 'string' && string.indexOf('http') !== -1
  }
}
