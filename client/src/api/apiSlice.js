import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8800/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
    getHotels: builder.query({
      query: () => "hotels",
      providesTags: ["Hotels"],
    }),
    createHotel: builder.mutation({
      query: (hotel) => ({
        url: "hotels",
        method: "POST",
        body: { ...hotel },
      }),
      invalidatesTags: ["Hotels"],
    }),
    //User
    login: builder.mutation({
      query: (user) => ({
        url: "auth/login",
        method: "POST",
        body: { ...user },
      }),
    }),
  }),
});

export const { useGetHotelsQuery, useCreateHotelMutation, useLoginMutation } =
  apiSlice;
