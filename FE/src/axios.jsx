import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:6001/api",     
  });

  // Add a request interceptor
  instance.interceptors.request.use(function (config) {
    const token = window.localStorage.getItem('token')
    if(token){
      const parseToken = JSON.parse(token)
      if(parseToken.state?.token) config.headers = {
        Authorization: `Bearer ${parseToken.state.token}`
      }
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response.data;
  });

export default instance;