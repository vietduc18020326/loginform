import {LOGOUT, LOGOUT_REQUEST} from '../actions/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import authStorage from '../../auth/storage';

export function* logoutRequest() {
  yield takeEvery(LOGOUT_REQUEST, logoutSaga);
}

function* logoutSaga() {
  yield call(authStorage.removeToken);
  yield put({type: LOGOUT});
}
