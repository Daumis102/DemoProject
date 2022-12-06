import {all} from 'redux-saga/effects';
import {loginUserWatcher} from './LoginUserSaga';
import {registerUserWatcher} from './RegisterUserSaga';

// use them in parallel
export default function* rootSaga() {
  yield all([registerUserWatcher(), loginUserWatcher()]);
}
