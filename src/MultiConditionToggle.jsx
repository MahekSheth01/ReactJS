import React from 'react';
import{useState} from "react";
function MultiToggle(){
    const [count,setCount]=useState(0);
    return (
        <div>
            <h1>Multi Condition Toggle Component</h1>
            <button onClick={()=>setCount(count+1)}>MultiToggle</button>
            {
                count==0?<h2>Count is Zero</h2>
                :count==1?<h2>Count is One</h2>
                :count==2?<h2>Count is Two</h2>
                :count==3? <h2>Count is Three</h2>
                :count==4?<h2>Count is Four</h2>
                :<h2>Count is Greater than Two</h2>
            }
        </div>
    )
}
export default MultiToggle;