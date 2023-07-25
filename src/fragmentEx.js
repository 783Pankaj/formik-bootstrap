// Fragments is a Wrapper to wrap the our component
//we use fragment in 3 type
//1. <React.Fragment>   2. first import fragment in React then in place of div use the <fragment></fragment>
// 3. <>  </>
// we can not use className in fragment . we use only key

import React,{Fragment} from "react";

function fragmentEx(props){
      return(
        <Fragment>
           <td>{props.data.name}</td>
        </Fragment>
      );
}
export default fragmentEx;