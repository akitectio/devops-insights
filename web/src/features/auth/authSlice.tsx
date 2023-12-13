import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ... reducers
  },
});

export const {
  /* exported actions */
} = authSlice.actions;

export default authSlice.reducer;
