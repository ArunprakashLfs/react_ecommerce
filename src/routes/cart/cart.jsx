import React from "react";
import { useSelector } from "react-redux";
const Cart =()=>{
    const Data = useSelector((state)=>state.nithin.Data);
    console.log(Data);
    return (
        <h2>Cart</h2>
    )
}
export default Cart;