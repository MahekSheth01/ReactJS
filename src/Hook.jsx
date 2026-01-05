import React, { use } from 'react'
import { useEffect } from 'react';
const Hook = () => {
    const [count,setCount]=React.useState(0);
    function handleClick(){
        setCount(count+1);
        console.log(count);
    }
    function hello(){
        console.log("Hello World");
    }
    useEffect(()=>{
    hello()},[])
    useEffect(()=>{
        handleClick();
    },[]);

  return (
    <div>
      <h1>Hooks</h1>
      
      <button onClick={handleClick}>Counter {count}</button>
    </div>
  )
}

export default Hook
