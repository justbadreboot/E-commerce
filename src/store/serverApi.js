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
        query: () => "product-production-cf12.up.railway.app/api/public/category/all"
      }),
      getProductsMain: builder.query({
        query: () => "product-production-cf12.up.railway.app/api/public/product/main"
      }),
      getRelatedProducts: builder.query({
        query: (id) => `product-production-cf12.up.railway.app/api/public/product/same/category/${id}`
      }),
      getServicesMain: builder.query({
        query: () => "service-production-bb52.up.railway.app/api/public/service/main"
      }),
      getDoctors: builder.query({
        query: () => `service-production-bb52.up.railway.app/api/public/doctor`
      }),
      getProductById: builder.query({
        query: (id) => `product-production-cf12.up.railway.app/api/public/product/${id}`
      }),
      getSpecialty: builder.query({
        query: () => "service-production-bb52.up.railway.app/api/public/specialty"
      }),



      getClientByDocument: builder.query({
        query: (doc) => `client-production-d410.up.railway.app/api/cliente/client/filter/${doc}`
      }),
      getClientByID: builder.query({
        query: (doc) => `client-production-d410.up.railway.app/api/private/client/${doc}`
      }),
      getAddressClient: builder.query({
        query: (doc) => `client-production-d410.up.railway.app/api/cliente/client/${doc}/direction/custom`
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
          url: `order-production-bfbc.up.railway.app/api/cliente/order`,
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
    useGetProductsMainQuery,
    useGetRelatedProductsQuery,
    useGetLandingQuery,
    useGetProductByIdQuery,
    useGetAddressClientQuery,
    useGetClientByDocumentQuery,
    useGetClientByIDQuery,
    useGetServicesMainQuery,
    useGetSpecialtyQuery,
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