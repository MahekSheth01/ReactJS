
import React from 'react'
import { useEffect } from 'react';
const Hooks = ({count,data}) => {
  function hello(){
    console.log("Hello from Hooks Component");
  }
  
  const [displayData,setDisplayData]=React.useState(true);

  useEffect(()=>{
    hello();
    console.log("Hooks Component Mounted");
  },[]);

  useEffect(()=>{
    console.log("Count or Data changed in Hooks Component");
    console.log("Hooks Component Updated");
  },[count,data]);

  useEffect(()=>{
    return ()=>{
      console.log("Hooks Component Unmounted");
    }
  },[]);
  return (
    <div>
      <h1>Count Value :{count} </h1>
        {displayData && <h2>Data : {data}</h2>}
      <button onClick={()=>setDisplayData(!displayData)}>Toggle Data Display</button>
    </div>
  )
}

export default Hooks
