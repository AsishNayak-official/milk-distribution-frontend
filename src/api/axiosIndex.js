import axios from "axios";
import process from 'process'; 

axios.defaults.baseURL = process?.env?.REACT_APP_BASE_URL ?? "";
axios.defaults.headers.post["Content-Type"] = "application/json";

//add more things
//interceptors to send authorization
axios.interceptors.request.use(function (config) {
  
    // Do something with request data
  return config;
});

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    throw error;
  }
);

export default axios;