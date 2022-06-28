import axios from "axios";

 const API_URL = "http://137.184.114.36:7774/";
 const token  = JSON.parse(localStorage.getItem("user_info"))?.data?.token?.access
 const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  function (config) {
   const token  = JSON.parse(localStorage.getItem("user_info"))?.data?.token?.access
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api