
const Child1 = ({setUser}) => {
  return (
    <div>
        <h4>Add User : </h4>
      <input type="text" placeholder='Add user' onChange={(event)=>setUser(event.target.value)} name="" id="" />
        <hr />
    </div>
  )
}

export default Child1
