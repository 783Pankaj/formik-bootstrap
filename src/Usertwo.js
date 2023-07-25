import React from "react"

function Usertwo(props){
    return(
        <div>
            <h3>I am User Two</h3>
            <button onClick={props.storData}>Click Me</button>
        </div>
    )
}

export default Usertwo;