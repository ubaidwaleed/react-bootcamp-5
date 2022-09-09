import React, {useContext} from "react";
import counterContext from "./CounterContext";

const Child=()=>{
let counterValue=useContext(counterContext)
console.log(counterValue);

    return(
        <div>
            <h3>this is first child using counter context</h3>
            <h4>Counter Value : {counterValue[0]}</h4>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    )
}

export default Child;