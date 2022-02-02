import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import authReducer from '../slices/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
