import { combineEpics, createEpicMiddleware } from 'redux-observable';
import quotesEpic from './epics/quotesEpic';

const epic = combineEpics(
  quotesEpic
);

export const epicMiddleware = createEpicMiddleware(epic);