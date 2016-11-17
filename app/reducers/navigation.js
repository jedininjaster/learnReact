import {
  TOGGLE_LEFT_DRAWER
} from '../constants/navigation';

const initialState = {
  leftDrawerOpen: false
};

const toggleLeftDrawer = (state) => {
  console.log('toggleLeftDrawer');
  console.log(state);
  let toReturn = {
    ...state,
    leftDrawerOpen: !state.leftDrawerOpen
  };
  console.log(toReturn);
  return toReturn
};

export default (state = initialState, action) => {

  console.log(state);
  console.log(action);

  let toReturn;

  const { type } = action;
  switch (type) {
    case TOGGLE_LEFT_DRAWER:
      toReturn = toggleLeftDrawer(state);
      break;
    default:
      toReturn = state;
  }

  console.log('toReturn');
  console.log(toReturn);

  return toReturn;
}
