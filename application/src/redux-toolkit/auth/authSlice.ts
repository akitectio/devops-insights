import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  user: null,
  token: null,
  roles: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.isLogin = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    onLogout: (state) => {
      state.isLogin = false;
      state.user = null;
      state.token = null;
      // state.roles = null
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;

export const { onLogin, onLogout, setRoles } = authSlice.actions;

export default authReducer;
