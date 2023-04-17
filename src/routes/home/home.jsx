// import Data from '../../components/datas/data'
import './home.scss'
import FilterContainer from '../../components/FilterContainer/FilterContainer';


const Home =({ Data })=>{
    const store = [...Data];
    return (
        <div >
            <FilterContainer/>
            <div className='container-home'>
            {store.map(({category, images})=>{
                return(
                    <div className='card-home'>
                        <h3>{category}</h3>
                        <div className='img-background' style={{backgroundImage: `url(${images[0]})`}}>
                        </div>
                    </div>
                )
            })}
            </div>
            
                    
                    
        </div>
    )
    
}
export default Home;