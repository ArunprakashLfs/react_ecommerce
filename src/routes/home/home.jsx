const Home =()=>{
    return(
        Data.map((val)=>{
            return(
                <h2>{val.title}</h2>
            )
        })
    )
}
export default Home;