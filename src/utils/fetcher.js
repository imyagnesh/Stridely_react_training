import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://1cb61110a6ad.ngrok.io/',
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config =>
    // Do something before request is sent
    config,
  error =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response.data,
  error => {
    if (error?.response?.data?.message[0]?.messages[0]?.message) {
      return Promise.reject(new Error(error?.response?.data?.message[0]?.messages[0]?.message));
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
