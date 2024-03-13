/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { mainClient } from "../utilities/client";
// import api from "./api";

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: "get" | "post" | "patch" | "delete" | "put";
      body?: AxiosRequestConfig["data"];
      config?: AxiosRequestConfig["params"];
    },
    unknown,
    {
      status?: number;
      message: any;
    }
  > =>
  async ({ url, method, body, config }) => {
    try {
      const result = await mainClient[method](url, body, {
        ...config,
        baseURL: "https://testing-Kaine-redux",
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      const errorBody = {
        status: err.response?.status,
        message: err.response?.data || err.message,
      };
      return { error: errorBody };
    }
  };
