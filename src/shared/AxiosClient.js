import axios from "axios";
import { authHeaderInterceptor } from "./interceptors/AuthHeaderInterceptor";
import Constants from "expo-constants";

export const clientInstance = axios.create({
  baseURL: Constants.manifest.extra.baseUrl,
});
clientInstance.interceptors.request.use(authHeaderInterceptor);
