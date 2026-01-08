import React, { useTransition } from 'react'

const HookUseTransition = () => {

    const [pending,startTransition]=useTransition();

    const handleClick=()=>{
        
        startTransition(async()=>{
            await new Promise(res=>{
            setTimeout(res,2000);
        })
        })
    }

  return (
    <div>
      <h1>UseTransition Hook</h1>
      {
        pending?
        <img style={{width:"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />:
        null
      }
      <button style={{color:"blue"}} disabled={pending} onClick={handleClick}>
        {
            pending?"Clicked....":"Click Me"
        }
      </button>
    </div>
  )
}

export default HookUseTransition
