import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../types';
import {RootState} from '../store';

type UserState = {
  user: User;
};

const initialState = {
  user: {},
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserName: (state, action) => {
      state.user = {...state.user, name: action.payload};
    },
    registerUserStep1: () => {
      console.log('registerUserStep1 from Slice');
    },

    // Saga actions
    loginUser: (state, action) => {},
    registerUserStep2: () => {},
    registerUserStep3: (state, action) => {},
  },
});

export const {
  setUser,
  setUserName,
  loginUser,
  registerUserStep1,
  registerUserStep2,
  registerUserStep3,
} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the stateSelectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter./// value)`
export const selectUserState = (state: RootState): UserState => state.user;
export const selectUser = (state: RootState) => selectUserState(state).user;
export const selectUserName = (state: RootState) => selectUser(state).name;
export const selectUserId = (state: RootState) => selectUser(state).id;

export default userSlice.reducer;
