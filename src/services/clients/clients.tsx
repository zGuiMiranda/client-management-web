import AppConfig from "@/appConfig";
import axiosInterceptorInstance from "../../shared/axiosInstance";
import { Client } from "../../shared/interfaces";

const clientsURL = `${AppConfig.backendUri}clients`;

export const saveClient = async (data: Client) => {
  return axiosInterceptorInstance.post(`${clientsURL}/create`, data);
};

export const editClient = async (data: Client) => {
  return axiosInterceptorInstance.put(`${clientsURL}/edit`, data);
};

export const getAllClients = async (filter: {}[]): Promise<Client[]> => {
  const response = await axiosInterceptorInstance.get(`${clientsURL}/findAll`);
  if (response.status === 200) return response.data;
  return [];
};

export const getClientById = async (
  id: string
): Promise<{ data: Client | string; status: number }> => {
  return axiosInterceptorInstance.get(`${clientsURL}/findById?id=${id}`);
};
