// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // All calls go to /api/...
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
