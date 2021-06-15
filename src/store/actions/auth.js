import {AUTHENTICATE, LOGIN_FAILED, LOGIN_SUCCESS} from './types';

export const loginSuccess = userId => {
  return {
    type: LOGIN_SUCCESS,
    user: userId,
  };
};
export const loginFailed = text => {
  return {
    type: LOGIN_FAILED,
    errorText: text,
  };
};
// export const loginRequest = (email, password) => {
//   return {
//     type: LOGIN_REQUEST,
//     user: {email, password},
//   };
// };

// export const logoutRequest = () => {
//   return {type: LOGOUT_REQUEST};
// };

export const authenticate = user => {
  return {type: AUTHENTICATE, user};
};
