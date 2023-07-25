// send the data child to parents

import React from "react";

function child(props){
   // const name = "Pankaj Pal"
   const users ={name:"pankaj", contacte:232}
    return(
        <div>
            <h2>User Name:</h2>
           <button onClick={()=>props.data(users)}>Click ME</button>
        </div>
    );
}
export default child;