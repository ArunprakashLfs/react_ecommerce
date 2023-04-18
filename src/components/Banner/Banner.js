// import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/all-files/ai'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import './banner.scss'
import { useState } from 'react'
const Banner=({store})=>{
    let data = [...store]

    //function for sliding
    const [currentSlide,setCurrentSlide] = useState(0)
    const prevSlide =()=>{
        setCurrentSlide(currentSlide === 0?5:(prev)=>prev-1)
    }
    const nextSlide =()=>{
        setCurrentSlide(currentSlide === 5?0:(prev)=>prev+1)
    };
    console.log(currentSlide)
    return(
        <div className="banner">
             {data.map(({images, brand})=>{
            return(
                <div className='banner-img' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                    <div>
                        <div className='banner-img-container'>
                            <img className='img-banner' src={images[1]} alt={brand}></img>
                        </div>
                        <div className='Arrowcontainer'>
                            <div onClick={prevSlide} className='arrow' >
                                <BsArrowLeft />
                            </div>
                            <div onClick={nextSlide} className='arrow'>
                                <BsArrowRight />    
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
       
        
    )
}
export default Banner;