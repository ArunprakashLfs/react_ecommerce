import { useDispatch } from 'react-redux';
import './shop.scss'
import { AddtoCart } from '../../redux/slice';
import { ToastContainer, toast } from 'react-toastify';
// import { useState } from 'react';
// import FilterContainer from '../../components/FilterContainer/FilterContainer';
const Shop =({Data})=>{
    const data = [...Data];
    const dispactch = useDispatch();
    // let [baseQty, setBaseQty] = useState(1);
    return(
        <>
        {/* <FilterContainer/> */}
        <div className="container">
            {data.map((val)=>{
                return(
                   <div className="card" key={val.id}>
                    <div className='background-image' >
                        <img  className='img' src={val.images[0]} alt={val.title}/>
                    </div>
                    <div className='body'>
                        <div className='body-text'>
                            <h3>{val.title}</h3>
                            <h4>{val.brand}</h4>
                            <p><strong>${val.price}</strong></p>
                            <button onClick={()=>dispactch(AddtoCart({
                                id: val.id,
                                title:val.title,
                                brand:val.brand, 
                                images:val.images, 
                                price:val.price,
                                quantity: val.quantity = 1, 
                                rating:val.rating,
                            })
                            ) &toast.success(`${val.brand} is added`)

                            }>Add To Cart</button>
                            {/* <p className='addtocart'>Quantity<button onClick={()=>setBaseQty(baseQty=== 1? (baseQty = 1):baseQty - 1 )}>-</button>{baseQty}<button onClick={()=>setBaseQty(baseQty + 1)}>+</button></p> */}

                        </div>
                        <div>
                            <p><span>{val.rating}⭐</span></p>
                            {/* <p>{description}</p> */}
                        </div>

                        
                    </div>
                   
                   </div>
                )
            })}
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
        </>
    )
}
export default Shop;