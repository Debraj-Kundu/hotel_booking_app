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
    getHotel: builder.query({
      query: ({id}) => `hotels/${id}`,
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
    register: builder.mutation({
      query: (user) => ({
        url: "auth/register",
        method: "POST",
        body: { ...user },
      }),
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelQuery,
  useCreateHotelMutation,
  useLoginMutation,
} = apiSlice;
