import axios from "axios";
import keycloak from "./keycloak";

const setupAxios = () => {
  axios.interceptors.request.use(
    async (config) => {
      if (keycloak.token) {
        config.headers.Authorization = `Bearer ${keycloak.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //   axios.interceptors.response.use(
  //     (response) => {
  //       return response;
  //     },
  //     (error) => {
  //       const errorStatus = error?.response?.status;
  //       if (error.response && error.response.status === 401) {
  //         keycloak.logout();
  //       }
  //       if (errorStatus == 403) {
  //         window.location.href = `/error/${errorStatus}`;
  //         // navigate(`/error/${errorStatus}`);
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
};

export default setupAxios;
