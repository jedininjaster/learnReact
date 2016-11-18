import {
  TOGGLE_LEFT_DRAWER
} from '../constants/navigationConstants';

import 'rxjs';

const navigationEpic = action$ => {
  console.log(action$);
  return action$
    .ofType(TOGGLE_LEFT_DRAWER)
    .delay(1000)
    .mapTo({type: 'QUOTE_RECEIVED', quote: 'rs quote here'});

};

export default navigationEpic;