import { ErrorState, LoginPayload } from "@_types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  isLoading: boolean;
  error: ErrorState | null;
}

const initialState: LoginState = {
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<ErrorState>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;
