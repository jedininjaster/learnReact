import {
  REQUEST_DATA,
  DATA_RECEIVED,
  REQUEST_ERROR
} from '../constants/GOTConstants';

import rxjs, {Observable} from 'rxjs';

const GOTDataEpic = action$ => {
  return action$
    .ofType(REQUEST_DATA)
    .mergeMap(action =>
      Observable
        .ajax
        .getJSON(action.url)
        .map(data => {
          return {type: DATA_RECEIVED, data, collection: action.collection}
        })
        .catch(error => {
          return {type: REQUEST_ERROR, error, collection: action.collection}
        })
    )
};

export default GOTDataEpic;