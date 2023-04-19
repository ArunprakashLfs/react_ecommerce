import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    Data: [],
    userInfo :null,

}
export const slice= createSlice({
    name: 'NithinTraders',
    initialState,
    reducers:{
        AddtoCart:(state, action)=>{
            const item = state.Data.find((item)=>item.id === action.payload.id);
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.Data.push(action.payload);
            }
            
        },
        deleteFromCart:(state, action)=>{
            state.Data = state.Data.filter(
                (item) => item.id !== action.payload
            );
        },
        resetCart: (state) =>{
            state.Data= [];
        },
        increment: (state, action) =>{
            const item = state.Data.find(
                (item) => item.id === action.payload.id
            );
            if(item){
                item.quantity++
            }
        },
        decrement: (state, action) =>{
            const item = state.Data.find(
                (item) => item.id === action.payload.id
            );
            if(item){
                item.quantity--
            }
        },
    }
})
export const {AddtoCart,deleteFromCart,resetCart,increment,decrement} = slice.actions;
export default slice.reducer;