import axios from "axios";
import Constants from "expo-constants";
import { authHeaderInterceptor } from "./interceptor/AuthHeaderInterceptor";

export const clientInstance = axios.create({
  baseURL: Constants.manifest.extra.baseURL,
});

clientInstance.interceptors.request.use(authHeaderInterceptor);
