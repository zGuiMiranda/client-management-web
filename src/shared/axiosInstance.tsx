import axios from "axios";
import toast from "react-hot-toast";
import { getCookie } from "cookies-next";

type ErrorResponse =
  | {
      response: { data: { message: { field: string; error: string }[] } };
    }
  | { message: string };

const axiosInterceptorInstance = axios.create();

axiosInterceptorInstance.interceptors.request.use(
  (request) => {
    request.headers.authorization = getCookie("access-token");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getErrorMessage = (error: ErrorResponse): string => {
  if ("response" in error) {
    return error.response.data.message
      .map((message: { field: string; error: String }) => message.error)
      .join(". ");
  }
  return error.message;
};

axiosInterceptorInstance.interceptors.response.use(
  (response: any) => {
    const data = response?.data?.data;

    if (data) return { data, status: response.data.statusCode };

    return response;
  },
  (error: ErrorResponse) => {
    toast.error(getErrorMessage(error));

    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
