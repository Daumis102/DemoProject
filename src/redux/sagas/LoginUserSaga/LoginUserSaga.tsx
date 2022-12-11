import {fetchUser, User} from '@api';
import {loginUser, setUser} from '@redux';
import {call, put, takeLatest} from 'redux-saga/effects';

export function* loginUserWatcher() {
  yield takeLatest(loginUser.toString(), loginUserWorker);
}

function* loginUserWorker(action: any) {
  const user: User | undefined = yield call(fetchUser, action.payload);
  console.log('user: ', user);
  if (user) yield put(setUser(user));
}
