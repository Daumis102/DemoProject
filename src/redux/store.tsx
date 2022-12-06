import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/RootSaga';

import userReducer from './slices/UserSlice';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = {user: userReducer};
export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch;
