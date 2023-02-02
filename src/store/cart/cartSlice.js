import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity:0,
    totalPrice:0,
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload
            const existItem = state.items.find(item => item.id === newItem.id)
            if(existItem){
                existItem.totalQuantity++
                existItem.totalPrice += newItem.pvp
            }else{
                /*state.items.push({
                    id: newItem.id,
                    price: newItem.pvp,
                    uantity: 1,
                    totalPrice: newItem.pvp,
                    name: newItem.name,
                    image: newItem.image
                })
                state.totalQuantity++*/
                state.items.push(action.payload)
            }
            state.items.push(action.payload)
        }
    }
})

export const { addToCart} = cartSlice.actions
export default cartSlice.reducer;