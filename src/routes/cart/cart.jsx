import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './cart.scss';
import { decrement, deleteFromCart, increment, resetCart } from "../../redux/slice";
import { ToastContainer, toast } from "react-toastify";

const Cart =()=>{
    const Data = useSelector((state)=>state.nithin.Data);
    const userInfo = useSelector((state)=>state.nithin.userInfo);
    let cartData =[...Data];
    const [payNow, setPaynow] = useState(false);
    const dispatch = useDispatch();
    let [totalAmount, setTotalAmount] = useState('');
    useEffect(()=>{
        let price = 0;
        cartData.map((val)=>{
            price += val.price * val.quantity;
            return price;
        });
        setTotalAmount(price);
    }, [cartData])
    const handleCheckout =()=>{
        if(userInfo){
            setPaynow(true)
        }else{
            toast.error("login to continue")
        }
    }
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
                                <button className="decrement" onClick={()=>dispatch(decrement({
                                id: val.id,
                                title:val.title,
                                brand:val.brand, 
                                images:val.images, 
                                price:val.price,
                                quantity: 1, 
                                rating:val.rating,}))}>-</button>
                                {val.quantity}
                                <button className="increment" onClick={()=>dispatch(increment({
                                id: val.id,
                                title:val.title,
                                brand:val.brand, 
                                images:val.images, 
                                price:val.price,
                                quantity: 1, 
                                rating:val.rating,}))}>+</button></p>
                                <p>${val.quantity * val.price}</p>
                            {/* </div> */}
                            <div onClick={()=>dispatch(deleteFromCart(val.id))} className="remove">x</div>
                        </div>
                       
                    </div>
                    
                )
                
            })}
        <button onClick={()=>dispatch(resetCart()) & toast.error('Your Cart is Empty')}>Reset</button>
        </div>

        <div className="totalValue">
                <h3>Total Amount</h3>
                <p><strong>Total: ${totalAmount}</strong></p>
                {/* <p>Shipping:<span>{}</span></p> */}
                <button onClick={handleCheckout} className="cart-button">Proceed to cart</button>
        </div>
        <ToastContainer
                    position='top-left'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                />
        </div>
    )
}
export default Cart;