import {AUTHENTICATE, LOGIN_REQUEST, LOGOUT, LOGOUT_REQUEST} from './types';

export const loginRequest = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    user: {email, password},
  };
};

export const logoutRequest = () => {
  return {type: LOGOUT_REQUEST};
};

export const authenticate = user => {
  return {type: AUTHENTICATE, user};
};
