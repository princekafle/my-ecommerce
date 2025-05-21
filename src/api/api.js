"use client";
import axios from "axios";
import config from "@/src/config";

const api = axios.create({
  baseURL: config.apiUrl,
 
});

api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken)

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
// this is interceptor file for api in which we can add authorization header and others details in api request to the server , and this file is sinply a middleware of api request in which we can add more details in axios request. 