import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://' 
    }),
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => "product-production-cf12.up.railway.app/api/category/all",
      }),
      getProducts: builder.query({
        query: () => "product-production-cf12.up.railway.app/api/product/all",
      }),
      getLanding: builder.query({
        query: () => "landing-production-11fd.up.railway.app/api/landing",
      }),

    }),
  });

  export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery,
    useGetLandingQuery
  } = serverApi;