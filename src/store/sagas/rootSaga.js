import {all, call} from 'redux-saga/effects';

import {loginRequest} from './login';
import {logoutRequest} from './logout';

export default function* rootSaga() {
  // yield all([call(loginRequest)]);
  // yield all([call(logoutRequest)]);
  yield all([call(loginRequest), call(logoutRequest)]);
}
