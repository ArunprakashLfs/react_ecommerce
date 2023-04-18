import './banner.scss'
const Banner=({store})=>{
    let data = [...store]
    return(
        data.map(({images, brand})=>{
            return(
                <div className="banner">
                    <img className='banner-img' src={images[0]} alt={brand}></img>
                </div>
            )
        })
        
    )
}
export default Banner;