// Reuse component in loop

import React from "react";

function ReuseComponent(props){
    return(
        <div>
            <span>{props.data.name}</span>
            <span>{props.data.gmail}</span><br />
            
        </div>
    );
}
export default ReuseComponent;