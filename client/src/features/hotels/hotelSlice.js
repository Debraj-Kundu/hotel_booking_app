import { apiSlice } from "../api/apiSlice";

//TODO: Entity Adapter 

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
    //TODO: Update Hotel query
    //TODO: Delete Hotel query
  }),
});

export const { useGetHotelQuery, useGetHotelsQuery, useCreateHotelMutation } =
  extendedApiSlice;

export const selectHotelsResult = extendedApiSlice.endpoints.getHotels.select();

