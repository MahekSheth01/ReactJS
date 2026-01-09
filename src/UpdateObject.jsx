import React, { useState } from 'react'

const UpdateObject = () => {

    const [data,setData]=useState(
        {
            name:"Mahek",
            address:{
                city:"Ahmedabad",
                country:"India"
            }
        }
    )
    const handleName=(name)=>{
        data.name=name;
        setData({...data,address:{...data.address}})
    }

    const handleCity=(city)=>{
        data.address.city=city
        setData({...data})
    }

    const handleCountry=(country)=>{
        data.address.country=country;
        setData({...data,address:{...data.address}})
    }
  return (
    <div>
      <input type="text" onChange={(event)=>handleName(event.target.value)}  placeholder='Update name' name="" id="" />
       <br /> <hr /><input type="text" placeholder='update city' onChange={(event)=>handleCity(event.target.value)} name="" id="" />
        <br /><hr />
        <input type="text" placeholder='update country' onChange={(event)=>handleCountry(event.target.value)} name="" id="" />
        <h3>Name is : {data.name}</h3>
        <h3>City is :{data.address.city}</h3>
        <h3>Country is : {data.address.country}</h3>
    </div>
  )
}

export default UpdateObject
