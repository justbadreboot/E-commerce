import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://' 
    }),
    endpoints: (builder) => ({
      getLanding: builder.query({
        query: () => "landing-production-11fd.up.railway.app/api/landing"
      }),
      getCategories: builder.query({
        query: () => "product-production-cf12.up.railway.app/api/category/all"
      }),
      getProducts: builder.query({
        query: () => "product-production-cf12.up.railway.app/api/product/all"
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
      getClientByDocument: builder.query({
        query:(doc) => `client-production-d410.up.railway.app/api/client/filter/${doc}`
      }),
      getServices: builder.query({
        query: () => "api-gateway-production-d841.up.railway.app/api/service"
      }),
      getServicesMain: builder.query({
        query: () => "api-gateway-production-d841.up.railway.app/api/service/main"
      }),
      getSpecialty: builder.query({
        query: () => "api-gateway-production-d841.up.railway.app/api/specialty"
      }),
      addNewClient: builder.mutation({
        query: ({document,lastName, firstName, phone}) => ({
          url: `client-production-d410.up.railway.app/api/client`,
          method: 'POST',
          body:{ document, lastName, firstName, phone },
        })
      }),
      addNewAddress : builder.mutation({
        query : ({id, city, houseNumber, mainStreet, postalCode, secondStreet, sector, state}) =>({
          url: `client-production-d410.up.railway.app/api/client/${id}/direction`,
          method: 'POST',
          body:{city, houseNumber, mainStreet, postalCode, secondStreet, sector, state},
        })
      }),
      addNewOrder: builder.mutation({
        query: ({date, deliveryState, idClient, orderDetails, orderState, paymentState, subtotal, total})=>({
          url: `order-production-bfbc.up.railway.app/api/order`,
          method: 'POST',
          body:{date, deliveryState, idClient, orderDetails, orderState, paymentState, subtotal, total},
        })
      }),

    }),
  });

  export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery,
    useGetLandingQuery,
    useGetProductByIdQuery,
    useGetClientByDocumentQuery,
    useGetServicesQuery,
    useGetServicesMainQuery,
    useGetSpecialtyQuery,
    useAddNewClientMutation,
    useAddNewAddressMutation,
    useAddNewOrderMutation,
  } = serverApi;