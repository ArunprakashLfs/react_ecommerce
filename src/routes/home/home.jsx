// import Data from '../../components/datas/data'
import './home.scss'

const Home =({Data})=>{
    const data = [...Data];
    return(
        <div className="container">
            {data.map(({title, brand})=>{
                return(
                   <div className="card">
                    <h2>{title}</h2>
                    <h3>{brand}</h3>
                   </div>
                )
            })}
        </div>
    )
    
}
export default Home;