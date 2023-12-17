import { axiosBaseQuery } from "./baseQuery";
import instance from "./instance";

export const axiosMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const contentTypes = {
  JSON: "application/json",
  MULTIPART: "multipart/form-data",
  URL_ENCODED: "application/x-www-form-urlencoded",
};

export { instance, axiosBaseQuery };
