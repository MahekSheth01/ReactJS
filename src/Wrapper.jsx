import React from 'react'

export default function Wrapper({children}) {
  return (
    <div style={{color:"teal",border:"3px solid teal",padding:"5px",margin:"5px",width:"600px"}}>
    {children}
    </div>
  )
}
