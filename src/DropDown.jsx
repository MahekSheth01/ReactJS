import React from 'react'

const DropDown = () => {
    const [city,setCity]=React.useState("Delhi");
    const handleChange=(event)=>{
        setCity(event.target.value);
    }
  return (
    <div>
      <h1>Selected City :{city}</h1>
      <select onChange={handleChange} name="city" id="city">
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="chennai">Chennai</option>
        <option value="kolkata">Kolkata</option>
        <option value="bangalore">Bangalore</option>
      </select>
    </div>
  )
}

export default DropDown
