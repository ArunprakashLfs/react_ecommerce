import './shop.scss'
const Shop =({Data})=>{
    const data = [...Data];
    return(
        <div className="container">
            {data.map(({title, brand, images, price, rating, description})=>{
                return(
                   <div className="card">
                    <div className='background-image' >
                        <img  className='img' src={images[0]} alt={title}/>
                    </div>
                    <div className='body'>
                        <div>
                            <h2>{title}</h2>
                            <h3>{brand}</h3>
                            <p><strong>${price}</strong></p>
                            <button>Add To Cart</button>

                        </div>
                        <div>
                            <p><span>{rating}⭐</span></p>
                            {/* <p>{description}</p> */}
                        </div>

                        
                    </div>
                   </div>
                )
            })}
        </div>
    )
}
export default Shop;