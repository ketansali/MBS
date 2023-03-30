import axios from "axios";
import { api } from "../urlConfig";

const getTokenSilently = () => {
  return localStorage.getItem("authToken");
};
const axiosInstance = axios.create({
  baseURL: api,
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = await getTokenSilently();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default axiosInstance;
