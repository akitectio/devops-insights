import { ErrorState, LoginResponse, authState } from "@_types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: authState = {
  isLoading: false,
  token: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.token = null;
      state.error = null;
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.isLoading = false;
      state.token = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<ErrorState>) => {
      console.log("loginFailure", action.payload);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;
