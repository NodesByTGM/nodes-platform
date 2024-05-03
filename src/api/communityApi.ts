/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const communityApi: any = createApi({
  reducerPath: "communityApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action?.type === REHYDRATE && action?.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    communityPost: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Community.Post}`,
          method: "post",
          body: data,
        };
      },
    }),
    getCommunityPost: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Community.Post}?${new URLSearchParams(
            cleanObject(params)
          )}`,
          method: "get",
        };
      },
    }),
    getDiscoverUsers: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${
            AppConfig.API_ENDPOINTS.Community.DiscoverUsers
          }?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),
    getConnectionsMine: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${
            AppConfig.API_ENDPOINTS.Community.ConnectionsMine
          }?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),
    getDiscoverBrands: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${
            AppConfig.API_ENDPOINTS.Community.DiscoverUsers
          }?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),

    likeCommunityPost: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Community.Post}/like/${data.id}`,
          method: "post",
          body: data,
        };
      },
    }),
    unlikeCommunityPost: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Community.Post}/unlike/${data.id}`,
          method: "post",
          body: data,
        };
      },
    }),
    getSpaces: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Community.Post}?${new URLSearchParams(
            cleanObject(params)
          )}`,
          method: "get",
        };
      },
    }),
    requestConnection: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Community.ConnectionRequests}/${data.id}`,
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useRequestConnectionMutation,
  useGetConnectionsMineQuery,
  useGetDiscoverBrandsQuery,
  useGetDiscoverUsersQuery,
  useGetCommunityPostQuery,
  useCommunityPostMutation,
  useLikeCommunityPostMutation,
  useUnlikeCommunityPostMutation,
} = communityApi;
