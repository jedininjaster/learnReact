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
        .getJSON('http://www.anapioficeandfire.com/api')
        .map(data => {
          return {type: DATA_RECEIVED, data}
        })
        .catch(error => {
          return {type: REQUEST_ERROR, error}
        })
    )
};

export default GOTDataEpic;