import AppConfig from "@/appConfig";
import axiosInterceptorInstance from "../../shared/axiosInstance";
import { User } from "@/shared/interfaces";

const loginURL = `${AppConfig.backendUri}users`;

export const login = async (data: User) => {
  const response = await axiosInterceptorInstance.get(
    `${loginURL}/login?login=${data.login}&password=${data.password}`
  );
  return response;
};
