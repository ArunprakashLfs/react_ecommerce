import './shop.scss'
const Shop =({Data})=>{
    const data = [...Data];
    return(
        <div className="container">
            {data.map(({title, brand, images})=>{
                return(
                   <div className="card">
                    <div className='body'>
                        <h2>{title}</h2>
                        <p>{brand}</p>
                    </div>
                    <div className='background-image' >
                        <img src={images[0]} alt={title}/>
                    </div>
                   </div>
                )
            })}
        </div>
    )
}
export default Shop;