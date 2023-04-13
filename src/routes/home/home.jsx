// import Data from '../../components/datas/data'

const Home =({Data})=>{
    const data = [...Data];
    return(
        <div>
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