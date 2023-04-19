import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    Shop:[],
    userInfo :null,

}
export const slice= createSlice({
    name: 'NithinTraders',
    initialState,
    reducers:{
        AddtoCart:(state, action)=>{
            state.Data = action.payload
        }
    }
})
export const {AddtoCart} = slice.actions;
export default slice.reducer;