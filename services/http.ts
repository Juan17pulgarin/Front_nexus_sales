import type { AxiosRequestConfig, Method } from "axios";
import { apiClient } from "@/lib/axios-client";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type HttpOptions = Omit<AxiosRequestConfig, "url" | "baseURL" | "method"> & {
  method?: HttpMethod;
};

export async function http<T>(path: string, options: HttpOptions = {}): Promise<T> {
  const method = (options.method ?? "GET") as Method;
  const response = await apiClient.request<T>({
    ...options,
    url: path,
    method,
  });

  return response.data;
}
