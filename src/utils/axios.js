import axios from "axios";

const Axios = axios.create({
  baseURL: "http://137.184.114.36:7774/",
  // baseURL: "https://10.80.80.122:8000/api/v1/",
  timeout: 30000,
  timeoutErrorMessage: "Connection is lost. Server not responded",
});

Axios.interceptors.request.use(
  (configs) => {
    const userInfo =  JSON.parse(localStorage.getItem("user_info"));
    console.log('token 2',userInfo);
    if (userInfo?.data?.token) {
      configs.headers.Authorization = `Bearer ${userInfo?.data?.token?.access }` 
    }
    return configs;
  },
  (err) => {}
);


Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default Axios;
