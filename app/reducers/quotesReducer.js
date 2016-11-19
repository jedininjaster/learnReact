import {
  REQUEST_QUOTE,
  QUOTE_RECEIVED
} from '../constants/quotesConstants';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type){
    case REQUEST_QUOTE:
      const toReturn = [...state, {quoteText: '', status: 'requested'}];
      return toReturn;
      break;
    case QUOTE_RECEIVED:
      return [...state, {quoteText: action.quote}];
      break;
    default:
      return state;
  }
}
