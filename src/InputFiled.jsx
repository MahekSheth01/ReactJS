import React from 'react'
import { useState } from 'react';
const InputFiled = () => {
    const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Get Input from Field</h1>
      <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} id="" placeholder='Enter Username' />
      <h1>{inputValue}</h1>
        <button onClick={()=>{
            setInputValue("")
        }}>Clear</button>
    </div>
  )
}

export default InputFiled
