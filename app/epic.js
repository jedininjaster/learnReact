import { combineEpics, createEpicMiddleware } from 'redux-observable';
import GOTDataEpic from './epics/GOTDataEpic';
import navigationEpic from './epics/navigationEpic';

const epic = combineEpics(
  GOTDataEpic,
  navigationEpic
);

export const epicMiddleware = createEpicMiddleware(epic);