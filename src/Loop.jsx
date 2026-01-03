import React from 'react'

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
