import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});

export default axiosInstance;
