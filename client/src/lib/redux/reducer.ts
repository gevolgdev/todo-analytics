import { combineReducers } from 'redux';
import userSlice from './slices/userSlice';
import tasksSlice from './slices/tasksSlice';

export const rootReducer = combineReducers({
  userSlice,
  tasksSlice,
});

export type RootState = ReturnType<typeof rootReducer>;