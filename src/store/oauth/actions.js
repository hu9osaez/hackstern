import { hacksterOauth } from '../../config/api';
import * as types from '../types';

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
