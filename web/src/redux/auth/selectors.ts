import { stateSelectors } from "@/src/types/auth";

export const isLoggedInSelector = (state: stateSelectors) =>
  state.auth.isLoggedIn;

export const isLoadingSelector = (state: stateSelectors) =>
  state.auth.isLoading;

export const errorSelector = (state: stateSelectors) => state.auth.error;

export const tokenSelector = (state: stateSelectors) => state.auth.token;

export const authSelector = (state: stateSelectors) => state.auth;
