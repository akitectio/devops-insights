import { axiosMethod } from "@configs/axios";

type Method = (typeof axiosMethod)[keyof typeof axiosMethod];

export interface AxiosBaseQueryParams {
  url: string;
  method: Method;
  data?: any;
}

export interface AxiosError {
  response?: {
    status: number;
    data: any;
  };
}
