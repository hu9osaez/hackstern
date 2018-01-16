import { REHYDRATE } from 'redux-persist';
import * as types from '../types';

const INITIAL_STATE = {
  data: {},
  isAuthenticated: false,
  rehydratedAt: null
};

export const oauthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.OAUTH_APP:
      return {
        ...state
      };
    case types.OAUTH_APP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true
      };
    case types.OAUTH_APP_FAIL:
      return {
        ...state,
        isAuthenticated: false
      };
    case REHYDRATE:
      return {
        ...state,
        data: action.payload,
        rehydratedAt: new Date()
      };
    default:
      return state;
  }
};
