import React from 'react'
import { useRef } from "react";
const HookuseRef = () => 
    {
    const inputRef=useRef(null);
    const h1Ref=useRef(null);
    function handleClick(){
        console.log("Input Value:",inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value="123";
        inputRef.current.style.color="red";
    }
    const toggleHandler=()=>{
      if(inputRef.current.style.display!="none"){
        inputRef.current.style.display="none";
      }
      else{
        inputRef.current.style.display="inline";
      }
    }
    const h1Handler=()=>{
      h1Ref.current.style.color="blue";
    }
  return (
    <div>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input ref={inputRef} type="text" placeholder="Enter username" />
      <button onClick={handleClick}>Focus on Field</button>
      <h1 ref={h1Ref}>Hello Mahekk!!</h1>
      <button onClick={h1Handler}>Click me to change color</button>
    </div>
  )
}


export default HookuseRef
