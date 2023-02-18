import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser: JSON.parse(localStorage.getItem('currentUser'))
}

export const userSlice = createSlice({
    name: "users",
    initialState:initialState, 
    reducers:{
        setCurrentUser : (state=initialState, {payload})=>{
            state.currentUser = payload
        },
    }
})

export const {setCurrentUser,updateCurrentUser}= userSlice.actions;