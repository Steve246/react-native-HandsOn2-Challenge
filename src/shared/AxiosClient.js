import axios from "axios";
import Constants from "expo-constants";

export const clientInstance = axios.create({
  baseURL: Constants.manifest.extra.baseURL,
});
