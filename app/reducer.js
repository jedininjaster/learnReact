import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import navigationReducer from './reducers/navigationReducer';
import GOTData from './reducers/GOTDataReducer';

export default combineReducers({
  navigation: navigationReducer,
  GOTData: GOTData
});