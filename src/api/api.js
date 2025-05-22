"use client";
import axios from "axios";
import config from "@/src/config";

const api = axios.create({
  baseURL: config.apiUrl,
 
});

// yo api.interceptors.request garepaxi chai  api interceptor use gareko hareko page ma authtoken aauxa first load mai natra second choti load huda aauthyo normally axios.create garera axios ko instance create garera authorizationma bearer token pathako vaye 
api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    // console.log(authToken)

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
    // config return garenau vane axios request send hudaina jaha hamile api interceptor use gareko xau
  },
  (error) => Promise.reject(error)
);

export default api;
// this is interceptor file for api in which we can add authorization header and others details in api request to the server , and this file is sinply a middleware of api request in which we can add more details in axios request. 