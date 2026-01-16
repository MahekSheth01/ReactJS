import React, { useId } from 'react'

const HookuseId = () => {

  return (
    <div>
    <UseForm/>
    </div>
  )
}

export default HookuseId

function UseForm(){
    const name=useId();
  const password=useId();
  const terms=useId();
  return(
    <div>
      <h1>UseId hook</h1>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{terms}</h3>
      <form action="" method='POST'>
        <label htmlFor={name}>Enter Name : </label> 
        <input type="text" id="name" placeholder='Enter Name' name=""  /><br /><br />
         <label htmlFor={password}>Enter Password : </label> 
        <input type="password" id="password" placeholder='Enter password' name=""  />
      </form>

      <form action="" method='POST'>
        <label htmlFor={name}>Enter Name : </label> 
        <input type="text" id="name" placeholder='Enter Name' name=""  /><br /><br />
         <label htmlFor={password}>Enter Password : </label> 
        <input type="password" id="password" placeholder='Enter password' name=""  />
      </form>
    </div>
  )
}