import axios from "axios";
import { api } from "../urlConfig";
import { store } from "../../redux/store";


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

axiosInstance.interceptors.response.use((res) => {
  return res;
}, (error) => {
  if(error){
      store.dispatch({ type: "LOGOUT" });
  }
  return Promise.reject(error);
})
export default axiosInstance;
