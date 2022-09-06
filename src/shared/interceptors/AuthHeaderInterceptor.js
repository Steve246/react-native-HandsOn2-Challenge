import { SERVICE } from "../constants";

export const authHeaderInterceptor = (config) => {
  if (config.url !== SERVICE.LOGIN) {
    config.headers.Authorization = "Bearer 123";
  }
  return config;
};
