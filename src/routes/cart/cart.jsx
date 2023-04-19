import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart =()=>{
    const Data = useSelector((state)=>state.nithin.Data);
    let cartData =[...Data]
    let [baseQty, setBaseQty] = useState(1);
    return (
        
        <div>
            
            <h2>Shopping cart</h2>
            {cartData.map((val)=>{
                return(
                    <div>
                        <div>
                        <img src={val.images[0]} alt="img" />
                        </div>
                        <div>
                            <p>{val.price}</p>
                            {/* <p>Quantity<button>-</button><span>{val.quantity}</span><button>+</button></p> */}
                             <p className='addtocart'>Quantity<button onClick={()=>setBaseQty(baseQty=== 1? (baseQty = 1):baseQty - 1 )}>-</button>{baseQty}<button onClick={()=>setBaseQty(baseQty + 1)}>+</button></p>
                        </div>
                    </div>
                    
                )
                
            })}
            
        </div>
    )
}
export default Cart;