import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://product-production-cf12.up.railway.app/api' 
    }),
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => "/category/all",
      }),
      getProducts: builder.query({
        query: () => "/product/all",
      }),
    }),
  });
  
  export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery 
  } = serverApi;

  // query: (page = 1) => `albums?_page=${page}&_limit=10`,