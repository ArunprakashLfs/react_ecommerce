import React from "react";
import { useSelector } from "react-redux";
const Cart =()=>{
    const Data = useSelector((state)=>state.nithin.Data);
    console.log(Data);
    return (
        <div>
            
            <h2>Shopping cart</h2>
            
        </div>
    )
}
export default Cart;