import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'api/v1',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3001' }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/user/me',
    }),
    logoutUser: builder.query({
        query: () => '/user/logout',
      }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/user/new',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
        query: (userData) => ({
          url: '/user/login',
          method: 'POST',
          body: userData,
        }),
      }),
      updateUser: builder.mutation({
        query: (userData, id) => ({
          url: `/user/update/${id}`,
          method: 'PUT',
          body: userData,
        }),
      }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = Api;
