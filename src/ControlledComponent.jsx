import React from 'react'
import { useState } from 'react';
const ControlledComponent = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return (
        <div>
            <form action="" method='GET'>
                <input type="text" value={name} onChange={(event)=>{
                    setName(event.target.value)
                }} placeholder='Enter name' /><br />
                <br />
                <input type="email" value={email} placeholder='Enter email' onChange={
                    (event)=>{
                        setEmail(event.target.value)
                    }
                } /><br />
                <br />
                <input type="password" value={password} placeholder='Enter password' onChange={
                    (event)=>{
                        setPassword(event.target.value)
                    }
                }/><br />
                <br />
                <button type='submit'>Submit</button>
                <button type='reset' onClick={()=>{
                    setName("");
                    setEmail("");
                    setPassword("");s
                }}>Reset</button>

                <h2>{name}</h2>
                <h2>{email}</h2>
                <h2>{password}</h2>
            </form>
        </div>
    )
}
export default ControlledComponent