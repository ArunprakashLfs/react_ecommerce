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
            
        }
    }
})
export const {AddtoCart} = slice.actions;
export default slice.reducer;