import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://' 
    }),
    endpoints: (builder) => ({
      getLanding: builder.query({
        query: () => "landing-production-11fd.up.railway.app/api/landing",
      }),
      getCategories: builder.query({
        query: () => "product-production-cf12.up.railway.app/api/category/all",
      }),
      getProducts: builder.query({
        query: () => "product-production-cf12.up.railway.app/api/product/all",
      }),
      getProductById: builder.query({
        query:(id) => `product-production-cf12.up.railway.app/api/product/${id}`
      }),
      getProductsByCategory: builder.query({
        query: (id) => `product-production-cf12.up.railway.app/api/product/category/${id}`
      }),
      searchProductsByName: builder.query({
        query: (name) => `product-production-cf12.up.railway.app/api/product/filter/${name}}`
      }),
      getPromotions: builder.query({
        query: () => `product-production-cf12.up.railway.app/api/product/all`
      })
    }),
  });

  export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery,
    useGetLandingQuery,
    useGetProductByIdQuery,
  } = serverApi;