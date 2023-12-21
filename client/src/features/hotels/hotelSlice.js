import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHotels: builder.query({
      query: () => "hotels",
      providesTags: ["Hotels"],
    }),
    getHotel: builder.query({
      query: ({ id }) => `hotels/${id}`,
    }),
    createHotel: builder.mutation({
      query: (hotel) => ({
        url: "hotels",
        method: "POST",
        body: { ...hotel },
      }),
      invalidatesTags: ["Hotels"],
    }),
  }),
});

export const { useGetHotelQuery, useGetHotelsQuery, useCreateHotelMutation } =
  extendedApiSlice;

export const selectHotelsResult = extendedApiSlice.endpoints.getHotels.select();

