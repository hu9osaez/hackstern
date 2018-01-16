import { hacksterOauth } from '../../config/api';
import * as types from '../types';

export const checkAccessToken = () => async (dispatch, getState) => {
  let data = await getState().oauth.isAuthenticated;

  console.log(data);

  if(getState().oauth.isAuthenticated) {
    // Get token
    // Check expiration
    console.log('Ya existe');
  }
  else {
    // If not are authenticated, dispatch 'getAccessToken'
    dispatch(getAccessToken());
  }
};

export const getAccessToken = () => async (dispatch) => {
  dispatch({ type: types.OAUTH_APP });

  let dataAccessToken = null;

  try {
    const issuedToken = await hacksterOauth.credentials.getToken();
    dataAccessToken = issuedToken.data;
  } catch (e) {
    console.log(e);
  }

  if(dataAccessToken) {
    dispatch({ type: types.OAUTH_APP_SUCCESS, payload: dataAccessToken });
  }
};
