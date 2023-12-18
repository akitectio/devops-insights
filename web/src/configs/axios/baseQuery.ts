import axiosInstance from "@configs/axios/instance";
import { AxiosBaseQueryParams } from "@_types/axios";
import { AxiosError } from "axios";
import { axiosMethod } from ".";

const axiosBaseQuery = async ({ url, method, data }: AxiosBaseQueryParams) => {
  try {
    const result = await axiosInstance({ url, method, data });
    if (result.status >= 200 && result.status < 300) {
      return {
        status: result.status,
        data: result.data,
      };
    } else {
      throw result;
    }
  } catch (axiosError) {
    let err = axiosError as AxiosError;
    return { status: err.response?.status, data: err.response?.data };
  }
};

export { axiosBaseQuery, axiosMethod };
