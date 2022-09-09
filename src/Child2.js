import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Child2=()=>{
    let [state, dispatch] = useReducer(counterReducer,1);
    console.log(state);
return(
    <div>
         <h3>this is second child using counter reducer</h3>
        <h3>Value of reducer state is : {state}</h3>
        <button onClick={()=>dispatch('INCREMENT')}>Increment reducer</button>

    </div>
)
}

export default Child2;