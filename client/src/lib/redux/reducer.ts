import { combineReducers } from 'redux';
import userSlice from './slices/userSlice';

export const rootReducer = combineReducers({
  userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;