import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserProps } from '../../../@types/types';

const initialState: UserProps[] = [
  {
    id: 0,
    email: '',
    name: '',
    password: '',
    token: '',
    isAuthenticated: false,
    friends: [],
  }
];

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    fetchUsers: (state, { payload }: PayloadAction<UserProps[]>) => {
      state = payload;
      return state;
    },
  }
});

export const { fetchUsers } = socialSlice.actions;
export default socialSlice.reducer;