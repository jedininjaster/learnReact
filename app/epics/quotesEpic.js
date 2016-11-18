import {
  REQUEST_QUOTE,
  QUOTE_RECEIVED,
  QUOTE_REQUEST_ERROR
} from '../constants/quotesConstants';

import rxjs, {Observable} from 'rxjs';

const quotesEpic = action$ => {
  console.log(action$);
  return action$
    .ofType(REQUEST_QUOTE)
    .mergeMap(action =>
      Observable
        .ajax
        .getJSON('http://www.anapioficeandfire.com/api', {
          'Content-Type': 'application/json'
        })
        .map(res => {
          return {type: QUOTE_RECEIVED, quote: res[0]}
        })
        .catch(error => {
          return {type: QUOTE_REQUEST_ERROR, error}
        })
    )
};

export default quotesEpic;