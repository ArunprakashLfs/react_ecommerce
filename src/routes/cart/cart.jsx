import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import './cart.scss';

const Cart =()=>{
    const Data = useSelector((state)=>state.nithin.Data);
    let cartData =[...Data]
    let [baseQty, setBaseQty] = useState(1);
    return (
        <div className="main"> 
            <div className="cart-main">
            
            <h2>Shopping cart</h2>
            {cartData.map((val)=>{
                return(
                    <div key ={val.id} className="cart-container">
                        <div className="cart-items">
                            <div className="cart-img-container">
                                <img className="cart-img" src={val.images[0]} alt="img" />
                            </div>
                            {/* <div className="cart-content"> */}
                                <p>{val.brand}</p>
                                <p>${val.price}</p>
                                {/* <p>Quantity<button>-</button><span>{val.quantity}</span><button>+</button></p> */}
                                <p className='addtocart'>Quantity
                                <button className="decrement" onClick={() => setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)}>-</button>
                                {baseQty}
                                <button className="increment" onClick={() => setBaseQty(baseQty + 1)}>+</button></p>

                            {/* </div> */}
                            <div className="remove">x</div>
                        </div>
                       
                    </div>
                    
                )
                
            })}
        
        </div>
        <div className="totalValue">
                <h3>Total Amount</h3>
                <p><strong>Total: ${ }</strong></p>
                {/* <p>Shipping:<span>{}</span></p> */}
                <button className="cart-button">Proceed to cart</button>
        </div>
        </div>
    )
}
export default Cart;