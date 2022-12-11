import {NotUndefined} from '@redux-saga/types';
import axios from 'axios';
import {MulticastChannel, stdChannel} from 'redux-saga';
import {put} from 'redux-saga/effects';
import {loginUser, setUser} from '../../slices/UserSlice';
import {loginUserWatcher} from './LoginUserSaga';

describe('LoginUserSaga', () => {
  let dispatched: any = [];
  let fakeStore: any;
  let channel: MulticastChannel<NotUndefined>;
  beforeEach(() => {
    jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({data: [{id: '1', name: 'test'}]});
    dispatched = [];
    channel = stdChannel();
    fakeStore = {
      channel,
      dispatch: (action: any) => dispatched.push(action),
      getState: () => ({state: {user: {}}}),
    };
  });

  it('should return requested user if user exists', async t => {
    // await runSaga(fakeStore, loginUserWatcher).toPromise();
    // channel.put(loginUser('test'));

    // console.log(dispatched);

    const saga = loginUserWatcher();
    const a = saga.next(loginUser('test'));
    const c = saga.next(loginUser('test'));

    console.log(a);
    const b = saga.next();
    console.log(b);
    const next = saga.next().value;
    expect(next).toStrictEqual(put(setUser({name: 'test', id: '1'})));
    console.log(next);
  });
});
