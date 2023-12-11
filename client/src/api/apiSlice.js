import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8800/api" }),
  endpoints: (builder) => ({
    getHotels: builder.query({
      query: () => "hotels",
    }),
  }),
});

export const { useGetHotelsQuery } = apiSlice;
