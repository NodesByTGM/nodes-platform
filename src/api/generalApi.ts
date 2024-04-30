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
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Trending.Events}`,
          method: "get",
        };
      },
    }),
    getContent: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Content.Contents}`,
          method: "get",
        };
      },
    }),
  }),
});

export const {
  useVerifyBusinessMutation,
  useCheckEmailMutation,
  useGetMoviesAndShowsQuery,
  useGetTrendingQuery,
  useUploadFileMutation,
  useVerifyTransactionQuery,
  useGetContentQuery
} = generalApi;
