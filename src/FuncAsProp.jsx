import React from 'react'

const FuncAsProp = ({func,name}) => {
  return (
    <div>
      <button onClick={()=>{func(name)}}>Show name</button>
    </div>
  )
}

export default FuncAsProp
