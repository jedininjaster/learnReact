import {
  REQUEST_QUOTE,
  QUOTE_RECEIVED
} from '../constants/quotes';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type){
    case REQUEST_QUOTE:
      return [...state, {quoteText: '', statue: 'requested'}];
      break;
    case QUOTE_RECEIVED:
      console.log(QUOTE_RECEIVED);
      return [...state, action.quote];
      break;
    default:
      return state;
  }
}
