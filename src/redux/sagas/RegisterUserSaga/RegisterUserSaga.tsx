import {call, put, take, takeLatest} from 'redux-saga/effects';
import {User} from '../../../api/types';
import {fetchUser} from '../../../api/Users';
import {
  registerUserStep1,
  registerUserStep2,
  registerUserStep3,
  setUser,
} from '../../slices/UserSlice';

export function* registerUserWatcher() {
  console.log('Register user saga');
  yield takeLatest(registerUserStep1.toString(), registerUserWorker);
}

export function* registerUserWorker() {
  console.log('worker started');
  yield take(registerUserStep2.toString());
  console.log('after second');
  const {payload} = yield take(registerUserStep3.toString());
  console.log('after third, name: ', payload);
  const user: User = yield call(fetchUser, payload);
  if (user) yield put(setUser(user));
}
