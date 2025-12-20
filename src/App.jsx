import Header from "./Header";
import Login, { Signup, User } from "./UserComponent";

function App(){
  return (
    <div>
      <h1>React JS - Day 2</h1>
      <Header />
      <Login />
      <Signup />
      <h1>{User}</h1>
    </div>
  )
}
export default App;