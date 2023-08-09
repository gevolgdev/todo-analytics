import { combineReducers } from 'redux';
import userSlice from './slices/userSlice';
import tasksSlice from './slices/tasksSlice';
import socialSlice from './slices/socialSlice';

export const rootReducer = combineReducers({
  userSlice,
  tasksSlice,
  socialSlice,
});

export type RootState = ReturnType<typeof rootReducer>;