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
  switch (action.type) {
    case REQUEST_DATA:
      const toReturn = {
        data: state.data,
        status: 'requested'
      };
      return toReturn;
      break;
    case DATA_RECEIVED:
      return {
        data: action.data,
        status: 'received'
      };
      break;
    case REQUEST_ERROR:
      return state;
      break;
    default:
      return state;
  }
}
