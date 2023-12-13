import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosInstance from "../../api/axios";

interface AxiosBaseQueryParams {
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
}

interface AxiosError {
  response?: {
    status: number;
    data: any;
  };
}

const axiosBaseQuery = async ({ url, method, data }: AxiosBaseQueryParams) => {
  try {
    const result = await axiosInstance({ url, method, data });
    return { data: result.data };
  } catch (axiosError) {
    let err = axiosError as AxiosError;
    return {
      error: { status: err.response?.status, data: err.response?.data },
    };
  }
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: { username: string; password: string }) => ({
        url: "/login",
        method: "post",
        data: credentials,
      }),
    }),
  }),
});
