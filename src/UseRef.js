// useRef is a hook . it is direactly manupulate our DOM. React always say that use the useRef very less to your code. with the help of useRef without css we use the styles, fouce, color..etc

import React,{useRef} from "react";

function UseRef(){
    let inputRef= useRef(null)
    function inputHandler(){
          inputRef.current.style.display="red"
    }
   
    return(
        <div>
            <input type="text" ref={inputRef} />
           <button onClick={inputHandler}>Change</button>
        </div>
    );
}
export default UseRef;