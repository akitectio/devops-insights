import axiosInstance from "@/src/configs/axios/instance";

const axiosMethod = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

type Method = (typeof axiosMethod)[keyof typeof axiosMethod];

interface AxiosBaseQueryParams {
  url: string;
  method: Method;
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

export { axiosBaseQuery, axiosMethod };
