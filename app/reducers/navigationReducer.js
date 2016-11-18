import {
  TOGGLE_LEFT_DRAWER
} from '../constants/navigationConstants';

const initialState = {
  leftDrawerOpen: false
};

const toggleLeftDrawer = (state) => {
  let toReturn = {
    ...state,
    leftDrawerOpen: !state.leftDrawerOpen
  };
  return toReturn
};

export default (state = initialState, action) => {
  let toReturn;
  const { type } = action;
  switch (type) {
    case TOGGLE_LEFT_DRAWER:
      toReturn = toggleLeftDrawer(state);
      break;
    default:
      toReturn = state;
  }
  return toReturn;
}
