import {LOGIN_REQUEST, LOGOUT} from '../actions/types';
import authStorage from '../../auth/storage';
import * as authActions from '../actions/auth';
import auth from '../../api/auth';

export const login = (email, password) => {
  return async dispatch => {
    dispatch({type: LOGIN_REQUEST});
    const response = await auth.login(email, password);
    if (!response.ok) {
      const mess = response.data.error.message;
      let errorText = '';
      if (mess === 'EMAIL_NOT_FOUND') {
        errorText = 'This email could be not found';
      } else if (mess === 'INVALID_PASSWORD') {
        errorText = 'This password could be not found';
      } else {
        errorText = 'Something went wrong!';
      }
      dispatch(authActions.loginFailed(errorText));
      return;
    }
    dispatch(authActions.loginSuccess(response.data.localId));
    authStorage.storeToken(response.data.idToken);
  };
};
export const logout = () => {
  return dispatch => {
    authStorage.removeToken();
    dispatch({type: LOGOUT});
  };
};
