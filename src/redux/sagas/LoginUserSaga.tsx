import {call, put, takeLatest} from 'redux-saga/effects';
import {User} from '../../api/types';
import {fetchUser} from '../../api/Users';
import {loginUser, setUser} from '../slices/UserSlice';

export function* loginUserWatcher() {
  yield takeLatest(loginUser.toString(), loginUserWorker);
}

function* loginUserWorker(action: any) {
  const user: User | undefined = yield call(fetchUser, action.payload);
  if (user) yield put(setUser(user));
}
