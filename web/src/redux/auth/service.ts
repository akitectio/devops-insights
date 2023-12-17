import { axiosBaseQuery, axiosMethod } from "@configs/axios/baseQuery";

import { API_PATHS } from "@configs/api-paths";

export const authService = {
  login: async (username: string, password: string) => {
    try {
      const response = await axiosBaseQuery({
        url: API_PATHS.LOGIN,
        method: axiosMethod.POST,
        data: { username, password },
      });
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error occurred during login:", error.message);
      }
      throw new Error(
        "Failed to log in. Please check your username and password."
      );
    }
  },
};

export default authService;
