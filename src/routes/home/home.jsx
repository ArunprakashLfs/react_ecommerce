// import Data from '../../components/datas/data'
import './home.scss'

const Home =({ Data })=>{
    const store = [...Data];
    return (
        <div>
            {store.map(({category})=>{
                return(
                    <div>
                        <h3>{category}</h3>
                    </div>
                )
            })
            }
        </div>
    )
    
}
export default Home;