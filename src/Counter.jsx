import{useState} from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);
    const [rCount, setRCount]=useState(10);
    function increment(){
        setCount(count+1);
    }
    return (
        <div>
            <h1>Counter Component</h1>
            <button onClick={increment}>Count ++</button>
            <h2>Count Value: {count}</h2>
            <button onClick={()=>{setRCount(rCount-1)}}>Count--</button>
            <h2>RCount Value: {rCount}</h2>
        </div>
    )
}
export default Counter;