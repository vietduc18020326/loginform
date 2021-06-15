import {
  AUTHENTICATE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';
import auth from '../../api/auth';
import authStorage from '../../auth/storage';

const loginSuccess = userId => {
  return {
    type: LOGIN_SUCCESS,
    user: userId,
  };
};
export const loginRequest = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    user: {email, password},
  };
};
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
      }
      dispatch({type: LOGIN_FAILED, errorText: errorText});
      return;
    }
    dispatch(loginSuccess(response.data.localId));
    authStorage.storeToken(response.data.idToken);
  };
};
export const logout = () => {
  return dispatch => {
    authStorage.removeToken();
    dispatch({type: LOGOUT});
  };
};

export const logoutRequest = () => {
  return {type: LOGOUT_REQUEST};
};

export const authenticate = user => {
  return {type: AUTHENTICATE, user};
};
