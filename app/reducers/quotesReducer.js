import {
  REQUEST_QUOTE,
  QUOTE_RECEIVED
} from '../constants/quotesConstants';

const initialState = [];

export default (state = initialState, action) => {
  console.log('reducer');
  switch(action.type){
    case REQUEST_QUOTE:
      console.log(REQUEST_QUOTE);
      console.log(state);
      console.log(action);
      const toReturn = [...state, {quoteText: '', status: 'requested'}];
      console.log(toReturn);
      return toReturn;
      break;
    case QUOTE_RECEIVED:
      console.log(QUOTE_RECEIVED);
      console.log(state);
      console.log(action);
      return [...state, {quoteText: action.quote}];
      break;
    default:
      return state;
  }
}
