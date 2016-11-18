import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import {epicMiddleware} from './epic';

export default createStore(reducer, applyMiddleware(epicMiddleware));