/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { REHYDRATE } from "redux-persist";
import { cleanObject } from "../utilities";
import AppConfig from "../utilities/config";

export const jobAndEventsApi: any = createApi({
  reducerPath: "jobAndEventsApi",
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 0,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action?.type === REHYDRATE && action?.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    // /api/v1/jobs/
    // Create a new job

    // GET
    // /api/v1/jobs/
    // Get all jobs

    // GET
    // /api/v1/jobs/{id}
    // Get a specific job by ID

    // PUT
    // /api/v1/jobs/{id}
    // Update a specific job by ID

    // DELETE
    // /api/v1/jobs/{id}
    // Delete a specific job by ID

    // POST
    // /api/v1/jobs/apply/{id}
    // Apply to a specific job by ID

    getJobs: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}`,
          method: "get",
        };
      },
    }),
    getJobById: builder.query<any, any>({
      query: (id) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/${id}`,
          method: "get",
        };
      },
    }),
    getBusinessUserJobs: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}?${new URLSearchParams(
            cleanObject(params)
          )}`,
          method: "get",
        };
      },
    }),
    // Use AppConfig.API_ENDPOINTS.Job.MyJobsUrl, no need for params, 
    // also pagination has been added to all these
    getMyBusinessUserJobs: builder.query<any, any>({
      query: () => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.MyJobsUrl}`,
          method: "get",
        };
      },
    }),
    createJob: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}`,
          method: "post",
          body: data,
        };
      },
    }),
    applyToJob: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/apply/${data?.id}`,
          method: "post",
          body: data,
        };
      },
    }),
    deleteJob: builder.mutation<any, any>({
      query: (id) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/${id}`,
          method: "delete",
        };
      },
    }),
    editJob: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Job.JobUrl}/${data?.id}`,
          method: "put",
          body: data,
        };
      },
    }),

    getBusinessUserEvents: builder.query<any, any>({
      query: (params) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}?${new URLSearchParams(
            cleanObject(params)
          )}`,
          method: "get",
        };
      },
    }),

    createEvent: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}`,
          method: "post",
          body: data,
        };
      },
    }),

    editEvent: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: `${AppConfig.API_ENDPOINTS.Events.BaseURL}/${data?.id}`,
          method: "put",
          body: data,
        };
      },
    }),

   
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useGetBusinessUserJobsQuery,
  useCreateJobMutation,
  useApplyToJobMutation,
  useDeleteJobMutation,
  useEditJobMutation,
  useGetBusinessUserEventsQuery,
  useCreateEventMutation,
  useEditEventMutation,

} = jobAndEventsApi;
