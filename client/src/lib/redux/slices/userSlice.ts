import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../../../@types/types";

const initialState: UserProps = {
  id: 0,
  name: '',
  email: '',
  password: '',
  token: '',
  isAuthenticated: false,
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
  }
});

export const { setData } = userSlice.actions;
export const { logOut } = userSlice.actions;
export default userSlice.reducer;