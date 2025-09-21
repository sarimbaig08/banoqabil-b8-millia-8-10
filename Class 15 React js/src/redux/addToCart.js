import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    cartArr : []
};

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
       addToCart: (state,action)=>{
       const itemExist = state.cartArr.find(
        (item)=> item.id == action.payload.id
       )
       if(itemExist){
        itemExist.count = (itemExist.count) + 1
       }else{
        state.cartArr.push({...action.payload,count:1})
       }
       }
    },
});

export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
