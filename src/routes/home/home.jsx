// import Data from '../../components/datas/data'

const Home =({Data})=>{
    const data = [...Data];
    return(
        <div>
            {data.map(({title})=>{
                return(
                    <h2>{title}</h2>
                )
            })}
        </div>
    )
    
}
export default Home;