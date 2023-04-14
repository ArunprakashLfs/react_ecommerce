// import Data from '../../components/datas/data'
import './home.scss'

const Home =({Data})=>{
    const data = [...Data];
    return(
        <div className="container">
            {data.map(({title, brand, images})=>{
                return(
                   <div className="card">
                    <div className='body'>
                        <h2>{title}</h2>
                        <h3>{brand}</h3>
                    </div>
                    <div className='background-image' style={{backgroundImage: `url(${images[0]})`}}>
                        
                    </div>
                   </div>
                )
            })}
        </div>
    )
    
}
export default Home;