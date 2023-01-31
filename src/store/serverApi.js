import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://product-production-cf12.up.railway.app/api//' 
    }),
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => "/category/all",
      }),
    }),
  });
  
  export const { useGetCategoriesQuery } = serverApi;

  // query: (page = 1) => `albums?_page=${page}&_limit=10`,