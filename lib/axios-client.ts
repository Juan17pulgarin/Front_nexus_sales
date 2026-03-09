import axios from "axios";

type AccessTokenGetter = () => string | null;

let accessTokenGetter: AccessTokenGetter = () => null;

export function setAccessTokenGetter(getter: AccessTokenGetter) {
  accessTokenGetter = getter;
}

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = accessTokenGetter();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
