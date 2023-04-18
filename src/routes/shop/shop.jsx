import './shop.scss'
// import FilterContainer from '../../components/FilterContainer/FilterContainer';
const Shop =({Data})=>{
    const data = [...Data];
    return(
        <>
        {/* <FilterContainer/> */}
        <div className="container">
            {data.map(({title, brand, images, price, rating, description})=>{
                return(
                   <div className="card">
                    <div className='background-image' >
                        <img  className='img' src={images[0]} alt={title}/>
                    </div>
                    <div className='body'>
                        <div className='body-text'>
                            <h3>{title}</h3>
                            <h4>{brand}</h4>
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
        </>
    )
}
export default Shop;