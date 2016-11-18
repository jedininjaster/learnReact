import {
  REQUEST_QUOTE,
  QUOTE_RECEIVED
} from '../constants/quotes';

const quotesEpic = action$ => {
  console.log(action$);

  return action$
    .ofType(REQUEST_QUOTE)
    .delay(2000)
    .mapTo({type: QUOTE_RECEIVED, quote: 'rs quote here'});
};

export default quotesEpic;