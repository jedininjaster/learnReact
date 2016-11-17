import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import navigationReducer from './reducers/navigation';

export default combineReducers({
  navigation: navigationReducer
});