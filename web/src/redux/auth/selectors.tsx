import { ErrorState } from "@/src/types/auth";
import { RootState } from "@store/rootState"; // Adjust the import path as needed

export const loading = (state: RootState): boolean => state.auth.loading;

export const error = (state: RootState): ErrorState | null => state.auth.error;

export const isLogin = (state: RootState): boolean => {
  return !!state.auth.token;
};
