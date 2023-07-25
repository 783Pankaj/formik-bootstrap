////useEffect with condition | part 2 | like component did mount

import React, { useEffect } from "react";

function User(props){
      useEffect(()=>{
            alert("data is" + props.data)

      },[props.data])
       return(
            <diV>
                  <h1>data is: {props.data}</h1>
                  <h2>count is: {props.count}</h2>
            </diV>
       );
}
export default User;

