// import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/all-files/ai'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import './banner.scss'
import { useState } from 'react'
const Banner=({store})=>{
    let data = [...store]

    //function for sliding
    const [currentSlide,setCurrentSlide] = useState(1)
    const prevSlide =()=>{
        setCurrentSlide(currentSlide === 1 ? 5:(prev)=>prev - 1)
    }
    const nextSlide =()=>{
        setCurrentSlide(currentSlide === 5 ? 1:(prev)=>prev + 1)
    };
    console.log(currentSlide)
    return(
        <div className="banner">
             {data.map(({images, brand, id})=>{
            return(
                <div className='banner-img' key ={id} style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                    <div>
                        <div className='banner-img-container'>
                            <img className='img-banner' src={images[0]} alt={brand}></img>
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