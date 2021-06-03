import {
  AUTHENTICATE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/types';

const initial = {
  isLogin: false,
  errorText: null,
  userId: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: false,
        errorText: null,
        userId: action.user,
      };
    case LOGOUT:
      return initial;
    case LOGIN_FAILED:
      return {
        ...state,
        isLogin: false,
        errorText: action.errorText,
        userId: null,
      };
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLogin: true,
        errorText: null,
        userId: null,
      };
    }
    case AUTHENTICATE:
      return {
        ...state,
        isLogin: false,
        errorText: null,
        userId: action.user,
      };
    default:
      return state;
  }
};
