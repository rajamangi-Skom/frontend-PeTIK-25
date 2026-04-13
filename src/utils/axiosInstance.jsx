import axios from "axios";

const axiosInstance = axios.create({
  basURL: import.meta.env.VITE_API_URL,
});

// setiap req yang dilakukan otomatis tambah token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// kalo kode status 401 kita redirect ke login
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
