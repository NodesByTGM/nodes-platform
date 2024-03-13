import axios from "axios";
import { BASE_API_ENDPOINT } from "./config";
// import {store} from "../store"; // Import your Redux store instance

// Function to get the access token from the Redux store
const getAccessToken = () => {
  // Access the Redux store state and retrieve the access token
//   const state = store.getState();
  return localStorage.getItem('bearerToken')
};

export const getClient = (
  baseURL = BASE_API_ENDPOINT,
  multipart = false,
  extraHeaders = {}
) => {
 
  const accessToken = getAccessToken();

  console.log("getAccessToken: " + accessToken);
//   console.log("getAccessToken: " + accessToken);

  const instance = axios.create({
    headers: {
      "Content-Type": `${
        multipart ? "multipart/form-data" : "application/json"
      }`,
      ...extraHeaders,
      Authorization: accessToken ? `Token ${accessToken}` : null,
    },
    baseURL: baseURL,
    timeout: 60000,
    // withCredentials:true
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
