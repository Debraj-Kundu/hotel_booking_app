import { apiSlice } from "../api/apiSlice";

//TODO: Entity Adapter 

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
    //TODO: All Users query
    //TODO: Update User query
    //TODO: Delete User query
  }),
});

export const { useLoginMutation, useRegisterMutation } =
  extendedApiSlice;


