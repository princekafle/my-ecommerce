"use client";

import axios from "axios";
import config from "../config";

const api = axios.create({
  baseURL: config.apiUrl,
});
console.log("testing");

api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
