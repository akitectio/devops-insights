import { LoginPayload, LoginResponse } from "@_types/auth";
import { API_PATHS } from "@configs/api-paths";
import { axiosBaseQuery, axiosMethod } from "@configs/axios";
import { createApi } from "@reduxjs/toolkit/query/react";

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
