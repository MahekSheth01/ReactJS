import { useState } from "react"

const Counter=()=>{
    const[count,setCount]=useState(0);

    const increment =()=>setCount(count+1);
    const decrement=()=>setCount(count-1);

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
//Manage their state
//Can update their existing state based on user interaction
//Can Handle complicated logic and produce required output as well