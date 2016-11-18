import {
  REQUEST_DATA,
  REQUEST_ERROR,
  DATA_RECEIVED
} from '../constants/GOTConstants';

const initialState = {
  data: null,
  status: null
};

export default (state = initialState, action) => {
  console.log('reducer');
  switch (action.type) {
    case REQUEST_DATA:
      console.log(REQUEST_DATA);
      console.log(state);
      console.log(action);
      const toReturn = {
        data: state.data,
        status: 'requested'
      };
      console.log(toReturn);
      return toReturn;
      break;
    case DATA_RECEIVED:
      console.log(DATA_RECEIVED);
      console.log(state);
      console.log(action);
      return action.data;
      break;
    case REQUEST_ERROR:
//       console.log(REQUEST_ERROR);
//       console.log(state);
//       console.log(action);
      return state;
      break;
    default:
      return state;
  }
}
