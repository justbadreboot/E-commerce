import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [],
        quantity:0,
        total:0,
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload
            const existItem = state.items.find(item => item.id === newItem.id)

            if(existItem){
                existItem.quantity++
                existItem.total += newItem.price
            }else{
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price,
                    name: newItem.name,
                    img: newItem.img
                })
                state.quantity++
            }
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;