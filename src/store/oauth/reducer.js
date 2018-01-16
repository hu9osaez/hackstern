import * as types from '../types';

const INITIAL_STATE = {
  loading: true,
  data: {},
  isAuthenticated: false
};

export const oauthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.OAUTH_APP:
      return {
        ...state,
        loading: true
      };
    case types.OAUTH_APP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isAuthenticated: true
      };
    case types.OAUTH_APP_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
