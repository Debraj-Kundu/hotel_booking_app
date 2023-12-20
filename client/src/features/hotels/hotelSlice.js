import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const hotelsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = hotelsAdapter.getInitialState()

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

export const { useGetHotelQuery, useGetHotelsQuery, useCreateHotelMutation } = extendedApiSlice;

// export const {
//     selectAll: selectAllHotels,
//     selectById: SelectAllHotelsById,
// } = {}

export const selectHotelsResult = extendedApiSlice.endpoints.getHotels.select();

const selectHotelsData = createSelector(
  selectHotelsResult,
  (hotelsResult) => hotelsResult.data
);
