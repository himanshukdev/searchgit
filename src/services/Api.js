import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/"
});

// Request Interceptor
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

//Response Interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    }
  }
);

export default instance;
