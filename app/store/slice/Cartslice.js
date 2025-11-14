import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: []}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:
        {
            addToCart:(state,action)=>{
                const item = action.payload

                state.items.push({...item,qty:1})
            }
        }
    
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
