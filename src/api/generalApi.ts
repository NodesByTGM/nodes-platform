/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const generalApi: any = createApi({
  reducerPath: "generalApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action?.type === REHYDRATE && action?.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    checkEmail: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Auth.CheckEmail}`,
          method: "post",
          body: data,
        };
      },
    }),

    uploadFile: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Uploads.UploadFile}`,
          method: "post",
          body: data,
        };
      },
    }),

    verifyTransaction: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${
            AppConfig.API_ENDPOINTS.Transactions.VerifyURL
          }?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),

    verifyBusiness: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Business.Verify}`,
          method: "post",
          body: data,
        };
      },
    }),

    getMoviesAndShows: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Trending.Movies}`,
          method: "get",
        };
      },
    }),
    getTrending: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Trending.Events}?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),
    getContent: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Content.Contents}?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),
    getNotifications: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Notification.BaseUrl}?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),
    getInteractions: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Notification.Interactions}?${new URLSearchParams(cleanObject(params))}`,
          method: "get",
        };
      },
    }),

    getPublicProfile: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Profile.PublicProfile}/${params?.id}`,
          method: "get",
        };
      },
    }),

    
    deleteNotifications: builder.mutation<any, any>({
      query: ({id}) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Notification.Delete}/${id}`,
          method: "delete",
        };
      },
    }),
  }),
});

export const {
  useGetPublicProfileQuery,
  useVerifyBusinessMutation,
  useCheckEmailMutation,
  useGetMoviesAndShowsQuery,
  useGetTrendingQuery,
  useUploadFileMutation,
  useVerifyTransactionQuery,
  useGetContentQuery,
  useGetNotificationsQuery,
  useGetInteractionsQuery,
  useDeleteNotificationsMutation

} = generalApi;
