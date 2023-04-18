import './banner.scss'
const Banner=({store})=>{
    let data = [...store]
    return(
        <div className="banner">
             {data.map(({images, brand})=>{
            return(
                <div className='banner-img'>
                    <div className='banner-img-container'>
                        <img className='img-banner' src={images[1]} alt={brand}></img>
                    </div>
                    <div>
                        <div>
                        AiOutlineArrowLeft
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
       
        
    )
}
export default Banner;