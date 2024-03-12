/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const profileApi: any = createApi({
  reducerPath: "profileApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE && action.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTest: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${"tester"}?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
          params: cleanObject(params),
        };
      },
    }),
    getUserProfile: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Profile.GetUserProfile}`,
          method: "get",
          
        };
      },
    }),
  }),
});

export const { useGetTestQuery, useGetUserProfileQuery } = profileApi;
