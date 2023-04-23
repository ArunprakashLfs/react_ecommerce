import { useState } from "react";
import { useSelector } from "react-redux";
// import Navbar from "../routes/Navbar/Navbar";
const Check = ()=>{
    const Data = useSelector((state)=>state.nithin.Data);
    // const userInfo = useSelector((state)=>state.nithin.userInfo)
    
    const dataVal= useState([...Data]);
    console.log(Data);
    
    // console.log(list);
    // const categoryFilter =(category)=>list.filter((val)=> val.category ===category)
    // console.log(categoryFilter());
    return(
        <>
        {/* <Navbar/> */}
        {dataVal.map((val)=>{
            return(
                <p>{val.title}</p>
            )
        })}
        </>
    )
}
export default Check;