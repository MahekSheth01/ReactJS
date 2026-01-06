import { useRef } from "react";
import React from 'react'

const userRefHook = () => {
    const inputRef=useRef(null);
    function handleClick(){
        console.log("Input Value:",inputRef.current.value);
        inputRef.current.focus();
    }
  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} type="text" placeholder="Enter username" />
      <button onClick={handleClick}>Focus on Field</button>
    </div>
  )
}

export default userRefHook
