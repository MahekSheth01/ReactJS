import React, { useState } from 'react'

const UpdateArray = () => {
    const [data,setData]=useState([
        'mahek','mahi','rahi','rita'
    ])

    const [user,setUser]=useState([
        {name:"Mahek",age:21},
        {name:"Rahi",age:33},
        {name:"Keny",age:21},
        {name:"vansh",age:23}
    ])


    const handleName=(name)=>{
        data[data.length-1]=name
        setData([...data])
    }
  return (
    <div>
        <input type="text" onChange={(e)=>handleName(e.target.value)} placeholder='update name' name="" id="" />
      <h1>Update Array using state</h1>
      {
        data.map((item,index)=>(
            <h4 key={index}>{item}</h4>
        ))
      }

      <hr />
      <hr /><hr />
      {
        user.map((item,index)=>(
            <h3 key={index}>{item.name}---{item.age}</h3>
        ))
      }
    </div>
  )
}

export default UpdateArray
