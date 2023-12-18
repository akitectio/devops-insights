import {
  ErrorState,
  LoginPayload,
  LoginResponse,
  authState,
} from "@_types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: authState = {
  isLoading: false,
  token: null,
  error: null,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.token = null;
      state.error = null;
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      localStorage.setItem("access_token", action.payload.token.access_token);
      localStorage.setItem("refresh_token", action.payload.token.refresh_token);
      state.isLoading = false;
      state.token = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<ErrorState>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    refreshToken: (state) => {
      state.isLoading = true;
    },
    refreshTokenSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
    },
    refreshTokenFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  refreshToken,
  refreshTokenSuccess,
  refreshTokenFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} = loginSlice.actions;
export default loginSlice.reducer;
