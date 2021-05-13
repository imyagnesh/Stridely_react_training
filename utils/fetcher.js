import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  timeoutErrorMessage: 'Due to heavy trafic server is not responding. Please Try after sometime.',
});

export default axiosInstance;
