import {all} from 'redux-saga/effects';
import {loginUserWatcher} from './LoginUserSaga/LoginUserSaga';
import {registerUserWatcher} from './RegisterUserSaga/RegisterUserSaga';

// use them in parallel
export default function* rootSaga() {
  yield all([registerUserWatcher(), loginUserWatcher()]);
}
