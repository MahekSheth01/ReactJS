import React, { useRef } from 'react'

const UnControlledComponent = () => {
    const handleUn=(event)=>{
        event.preventDefault();
        const username=document.querySelector("#username").value
        const password=document.querySelector("#password").value
        console.log("Username:",username);
        console.log("Password:",password);
    }

    const userRef=useRef();
    const passRef=useRef();

    const handleRef=(event)=>{
        event.preventDefault();
        const username=userRef.current.value;
        const password=passRef.current.value;
        console.log("Username:",username);
        console.log("Password:",password);
    }

  return (
    <div>
      <h1>Uncontrolled Component with query selector</h1>
      <form action="" method="post" onSubmit={handleUn}>
        Enter Name : <input type="text" id="username" name="username" />
        <br />
        Enter Password : <input type="password" name="password" id="password" />
        <br />
        <button type="submit">Submit</button>
      </form>

       <h1>Uncontrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={handleRef}>
        Enter Name : <input type="text" ref={userRef} id="usernameref" name="username" />
        <br />
        Enter Password : <input type="password" ref={passRef} name="password" id="passwordref" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UnControlledComponent
