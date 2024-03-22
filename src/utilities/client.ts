import axios from "axios";
import { BASE_API_ENDPOINT } from "./config";

// const getAccessToken = () => {

//   return localStorage.getItem("bearerToken");
// };

export const getClient = (
  baseURL = BASE_API_ENDPOINT,
  multipart = false,
  extraHeaders = {}
) => {
  const instance = axios.create({
    headers: {
      "Content-Type": `${
        multipart ? "multipart/form-data" : "application/json"
      }`,
      ...extraHeaders,
    },
    baseURL: baseURL,
    timeout: 60000,
    // withCredentials:true
  });
  //set auth header on every request to ensure its most recent auth header
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("bearerToken");
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  });

  instance?.interceptors?.response?.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("error from client: ", error);
      if (error.code === "ERR_NETWORK") {
        error["response"] = {
          data: {
            title: "Network error",
            message: "Please try again later, thank you.",
          },
        };
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export const mainClient = getClient(BASE_API_ENDPOINT);
// export const multipartClient = getClient(config.API_ENDPOINTS.Base, true);
// TODO: Handle auth errors and store profile in localstorage
