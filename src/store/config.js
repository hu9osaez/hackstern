import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
);

export default store;
