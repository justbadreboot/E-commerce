import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser: null,
}

export const userSlice = createSlice({
    name: "users",
    initialState:initialState, 
    reducers:{
        setCurrentUser : (state=initialState, {payload})=>{
            state.currentUser = payload
        },
        updateCurrentUser:(state,action)=>{
            state.currentUser = action.payload;
        },
    }
})

export const {setCurrentUser,updateCurrentUser}= userSlice.actions;