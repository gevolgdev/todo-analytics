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
    }
  }
});

export default userSlice.reducer;
export const { setData } = userSlice.actions;