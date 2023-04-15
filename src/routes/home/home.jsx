// import Data from '../../components/datas/data'
import './home.scss'

const Home =({ Data })=>{
    const store = [...Data];
    return (
        <div>
            {store.map(({category})=>{
                return(
                    <div>
                        <h3>{category[1]===category[2]?category[1]:category[2]}</h3>
                    </div>
                )
            })
            }
        </div>
    )
    
}
export default Home;