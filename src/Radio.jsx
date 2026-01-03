import React, { useState } from 'react'

const Radio = (name="female") => {
    const [gender,setGender]=useState("male");

    const handleChange=(event)=>{
        setGender(event.target.value);
    }

  return (
    <div>
      <h1>Select Gender:{gender}</h1>
      <input onChange={handleChange} checked={gender=="female"} type="radio" value="female" name="gender" id="female" />
        <label for="female"> Female</label><br/>
      <input onChange={handleChange} type="radio" checked={gender=="male"} value="male" name="gender" id="male" />
        <label for="male"> Male</label><br/>
      <input onChange={handleChange} type="radio" value="other" checked={gender=="other"} name="gender" id="other" />
        <label for="other"> Other</label><br/>    
       
    </div>

  )
}

export default Radio
