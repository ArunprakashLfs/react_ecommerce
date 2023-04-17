// import Data from '../../components/datas/data'
import './home.scss'
import FilterContainer from '../../components/FilterContainer/FilterContainer';

const Home =({ Data })=>{
    const store = [...Data];
    return (
        <div>
            <FilterContainer/>
            {store.map(({category})=>{
                return(
                    <div>
                        <h3>{category}</h3>
                    </div>
                )
            })}
                    
                    
        </div>
    )
    
}
export default Home;