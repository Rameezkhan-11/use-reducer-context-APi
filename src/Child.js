import React,{useReducer}from "react";
import Reduce from './Reduce';



const Child = () =>{

    const [c, cR] = useReducer(Reduce,0)

    return(
        <>


        <h1>Reducer {c}</h1>

        <button onClick={()=>{cR('INCREMENT')}}>Click Reducer</button>
        

        </>

    )






}
export default Child;