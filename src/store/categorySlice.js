import { createSlice } from "@reduxjs/toolkit";
import { serverApi } from "../api/api";

const initialState = {
    categories:[],
    error:" "
}

export const getCategories =()=>{
    return async (dispatch) => {
        try{
            const response = await serverApi.get("product-production-cf12.up.railway.app/api/category/all")
            dispatch(fetchSuccess(response.data))
        }catch(error){
           dispatch(fetchFailure(error.message))
        }
    }
}

export const categorySlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
        fetchSuccess: (state, action) => {
            state.categories = action.payload;
            state.error = null;
        },
        fetchFailure: (state, action) => {
            state.error = action.payload;
        },
    }
    
})

export const {fetchFailure, fetchSuccess} = categorySlice.actions
export default categorySlice.reducer;