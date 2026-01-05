
import React from 'react'
import { useEffect } from 'react';
const Hooks = ({count,data}) => {
  function hello(){
    console.log("Hello from Hooks Component");
  }
  useEffect(()=>{
    hello();
  },[]);

  useEffect(()=>{
    console.log("Count or Data changed in Hooks Component");
  },[count,data]);
  return (
    <div>
      <h1>Count Value :{count} </h1>
      <h2>Data :{data}</h2>
    </div>
  )
}

export default Hooks
