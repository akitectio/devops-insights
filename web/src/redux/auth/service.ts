import { API_PATHS } from "@/src/configs/api-paths";
import { axiosBaseQuery, axiosMethod } from "@/src/configs/axios";
import { createApi } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
  access_token: string;
  expires_in: number;
  not_before_policy: number;
  refresh_expires_in: number;
  refresh_token: string;
  scope: string;
  session_state: string;
  token_type: string;
}

interface LoginPayload {
  username: string;
  password: string;
}

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginPayload, LoginResponse>({
      query: (credentials) => ({
        url: API_PATHS.LOGIN,
        method: axiosMethod.POST,
        data: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authService;
