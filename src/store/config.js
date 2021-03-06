import { AsyncStorage } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as rootReducers from './reducers';

const config = {
  key: 'root',
  debug: true,
  storage
};

const middleware = [reduxThunk];

if (__DEV__) {
  middleware.push(logger);
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig);

const configureStore = () => {
  return { persistor, store };
};

export default configureStore;
