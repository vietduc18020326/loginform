import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS} from '../actions/types';
import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import auth from '../../api/auth';
import authStorage from '../../auth/storage';

export function* loginRequest() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}

function* saveUser(token) {
  authStorage.storeToken(token);
}

function* loginSaga(action) {
  const {email, password} = action.user;
  const response = yield call(auth.login, email, password);
  if (!response.ok) {
    const mess = response.data.error.message;
    let errorText = '';
    if (mess === 'EMAIL_NOT_FOUND') {
      errorText = 'This email could be not found';
    } else if (mess === 'INVALID_PASSWORD') {
      errorText = 'This password could be not found';
    }
    yield put({type: LOGIN_FAILED, errorText: errorText});
    return;
  }
  yield put({type: LOGIN_SUCCESS, user: response.data.localId});
  yield call(saveUser, response.data.idToken);
}
