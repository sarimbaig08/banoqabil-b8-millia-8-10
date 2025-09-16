import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:10
    },
    reducers:{
        increment : (state, payload)=>{
            state.value +=1
            console.log("payload",payload)
        }
    }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer