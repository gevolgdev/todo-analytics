import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../../../@types/types";

const initialState: UserProps = {
  id: 0,
  name: '',
  email: '',
  password: '',
  token: '',
  isAuthenticated: false,
  friends: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<UserProps>): UserProps => {
      let newState: UserProps = {
        ...state,
        ...payload,
      };

      return newState;
    },
    logOut: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;

      return state;
    },
    addFriend: (state, { payload }: PayloadAction<number>) => {
      state.friends.push( payload );

      return state;
    },
  }
});

export const { setData } = userSlice.actions;
export const { logOut } = userSlice.actions;
export const { addFriend } = userSlice.actions;
export default userSlice.reducer;