import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://',
      /*prepareHeaders: (headers) => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
          headers.set("Content-Type", "application/json");
        }
        return headers;
      },*/
    }),
    endpoints: (builder) => ({
      getLanding: builder.query({
        query: () => "landing-production-11fd.up.railway.app/api/landing"
      }),
      getCategories: builder.query({
        query: () => "api-gateway-production-d841.up.railway.app/api/public/category/all"
      }),
      getProducts: builder.query({
        query: () => "api-gateway-production-d841.up.railway.app/api/public/product/all"
      }),
      getProductsMain: builder.query({
        query: () => "api-gateway-production-d841.up.railway.app/api/public/product/main"
      }),
      getRelatedProducts: builder.query({
        query: (id) => `api-gateway-production-d841.up.railway.app/api/public/product/same/category/${id}`
      }),
      getProductById: builder.query({
        query: (id) => `api-gateway-production-d841.up.railway.app/api/public/product/${id}`
      }),
      getProductsByCategory: builder.query({
        query: (id) => `api-gateway-production-d841.up.railway.app/api/public/product/category/${id}`
      }),
      getClientByDocument: builder.query({
        query: (doc) => `client-production-d410.up.railway.app/api/cliente/client/filter/${doc}`
      }),
      getClientByID: builder.query({
        query: (doc) => `client-production-d410.up.railway.app/api/cliente/client/${doc}`
      }),
      getServices: builder.query({
        query: () => "service-production-bb52.up.railway.app/api/public/service"
      }),
      getServicesMain: builder.query({
        query: () => "service-production-bb52.up.railway.app/api/public/service/main"
      }),
      getSpecialty: builder.query({
        query: () => "service-production-bb52.up.railway.app/api/public/specialty"
      }),
      getDoctors: builder.query({
        query: () => `api-gateway-production-d841.up.railway.app/api/public/doctor`
      }),
      getAddressClient: builder.query({
        query: (doc) => `client-production-d410.up.railway.app/api/cliente/client/${doc}/direction/custom`
      }),
      getOrdersByClient:builder.query({
        query: (doc) => `client-production-d410.up.railway.app/api/cliente/order/client/${doc}`
      }),
      getOrderByID:builder.query({
        query: (doc) => `client-production-d410.up.railway.app/api/cliente/order/${doc}`
      }),
      getAppointmentsByClient:builder.query({
        query: (doc) => `service-production-bb52.up.railway.app/api/cliente/appointment/client/${doc}`
      }),
      addNewClient: builder.mutation({
        query: ({document,lastName, firstName, phone,userId}) => ({
          url: `client-production-d410.up.railway.app/api/public/client`,
          method: 'POST',
          body:{ document, lastName, firstName, phone, userId },
        })
      }),
      updateClient: builder.mutation({
        query: ({document,lastName, firstName, phone,userId,id}) => ({
          url: `client-production-d410.up.railway.app/api/cliente/client`,
          method: 'PUT',
          body:{ document, lastName, firstName, phone, userId,id },
        })
      }),
      addNewAddress: builder.mutation({
        query : ({id, city, houseNumber, mainStreet, postalCode, secondStreet, sector, state}) =>({
          url: `client-production-d410.up.railway.app/api/cliente/client/${id}/direction`,
          method: 'POST',
          body:{city, houseNumber, mainStreet, postalCode, secondStreet, sector, state},
        })
      }),
      updateAddress: builder.mutation({
        query : ({idCliente,id, city, houseNumber, mainStreet, postalCode, secondStreet, sector, state}) =>({
          url: `client-production-d410.up.railway.app/api/cliente/client/${idCliente}/direction`,
          method: 'PUT',
          body:{city, houseNumber, mainStreet, postalCode, secondStreet, sector, state,id},
        })
      }),
      addNewOrder: builder.mutation({
        query: ({date, deliveryState,idAddress, idClient, orderDetails, orderState, paymentState, subtotal, total,clientDocument,clientName, clientLastName,clientPhone})=>({
          url: `client-production-d410.up.railway.app/api/cliente/order`,
          method: 'POST',
          body:{date, deliveryState,idAddress, idClient, orderDetails, orderState, paymentState, subtotal, total,clientDocument,clientName,clientLastName,clientPhone},
        })
      }),
      addNewAppointment: builder.mutation({
        query: ({id,clientId,date,duration})=>({
          url: `service-production-bb52.up.railway.app/api/cliente/service/${id}/appointment`,
          method: 'POST',
          body:{id,clientId,date,duration},
        })
      }),
      login: builder.mutation({
        query:({email, password}) => ({
          url: `authserve-production.up.railway.app/auth/login`,
          method: 'POST',
          body:{email, password},
        })
      }),
      create: builder.mutation({
        query:({email, password, username}) => ({
          url: `authserve-production.up.railway.app/auth/create`,
          method: 'POST',
          body:{email, password, username},
        })
      }),
    }),
  });

  export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery,
    useGetProductsMainQuery,
    useGetRelatedProductsQuery,
    useGetLandingQuery,
    useGetAddressClientQuery,
    useGetProductByIdQuery,
    useGetClientByDocumentQuery,
    useGetOrderByIDQuery,
    useGetClientByIDQuery,
    useGetServicesQuery,
    useGetAppointmentsByClientQuery,
    useGetServicesMainQuery,
    useGetSpecialtyQuery,
    useGetOrdersByClientQuery,
    useGetDoctorsQuery,
    useAddNewClientMutation,
    useUpdateClientMutation,
    useUpdateAddressMutation,
    useAddNewAddressMutation,
    useAddNewOrderMutation,
    useAddNewAppointmentMutation,
    useLoginMutation,
    useCreateMutation,
  } = serverApi;