import { ErrorState, LoginPayload, LoginState } from "@/src/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LoginState = {
  loading: false,
  error: null,
  token: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<ErrorState>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;
