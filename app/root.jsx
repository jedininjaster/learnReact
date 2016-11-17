import React, {Component} from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import App from './App.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

const mount = document.getElementById('root');
render(<Root />, mount);
