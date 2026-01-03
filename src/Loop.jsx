import React from 'react'
import Reuse from './Reuse'

const Loop = () => {
    const userData=[{
        name:"John",
        age:30,
        email:"john@gmail.com",
        id:1},
        {
        name:"Jane",
        age:25,
        email:"jane@gmail.com",
        id:2
        },
        {
        name:"Doe",
        age:28,
        email:"doe@gmail.com",
        id:3
    },{
        name:"Smith",
        age:35,
        email:"smith@gmail.com",
        id:4
    }
    ]
  return (
    <div>
      <h1 style={{color:"orange"}}>User Data</h1>

       <h2>Reuse Component</h2>
       {
        userData.map((user)=>(
            <div key={user.id} style={{color:"teal",border:"2px solid black",margin:"10px",padding:"10px",width:"300px"}}>
                <Reuse data={user}/>
            </div>
        ))
       }

      <table>
        <thead style={{backgroundColor:"lightgrey"}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                userData.map((user)=>(
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                    </tr>
                ))
            }
        </tbody>        
      </table>
    </div>
  )
}

export default Loop
