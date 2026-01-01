import React from 'react';
import{useState} from "react";

function Toggle(){
    const [display,setDisplay]=useState(true);
    return (
        <div>
            <h1>Toggle Component</h1>
            <button onClick={()=>{
                setDisplay(!display)
            }}>Display data</button>
            {
                display?<h2>This is Toggle Component</h2>:null
            }
        </div>
    )
}

export default Toggle;