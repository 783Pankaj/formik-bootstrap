// controlled use with in useState 

import React,{useState} from "react";

function Controlled(){
    const[val, setVal]=useState("")
   return(
    
    <div>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
        <h2>value is :  {val}</h2>
        {/* <button onClick} */}
    </div>
   );
}
export default Controlled;