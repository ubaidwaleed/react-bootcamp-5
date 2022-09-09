import React, {useContext} from "react";
import counterContext from "./CounterContext";

const Child=()=>{
let counterValue=useContext(counterContext)
console.log(counterValue);

    return(
        <div>
            <h3>this is first child</h3>
            <h4>Counter Value : {counterValue}</h4>
        </div>
    )
}

export default Child;