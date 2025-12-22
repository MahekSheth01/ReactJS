import Todo from "./ex1";
import Header from "./Header";
import Login, { Signup, User } from "./UserComponent";

function App(){
  function handleClick(){
    alert("Button Clicked");
  }
  const name=undefined;
  function sum(a,b){
    return a+b;
  }
  function opr(a,b,c){
    if (c==="add"){
      return a+b;
    }
    else if(c==="sub"){
      return a-b;
    }
    else{
      return "Invalid Operation";
    }
  }
  let userObj={
    name:"Mahek Sheth",
    age:21,
    email:"mahek@123.com"
  }
  let arr=[10,20,30,40,50];
  let path="https://images.pexels.com/photos/4473877/pexels-photo-4473877.jpeg";
  return (
    <div>
      <h1>React JS - Day 3</h1>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <h1>Username:{name}</h1>
      <h2>Sum of a+b : {sum(10,2)}</h2>
      <h3>Operation output : {opr(10,2,"sub")}</h3>
      <h4>Condition output: {name?name:"User not found"}</h4>
      <h3>Object fetching :{userObj.name}</h3>
      <h4>Array : {arr[1]}</h4>
      <image src={path} alt="random img" width="300"/>
      {/* <Header />
      <Login />
      <Signup />
      <Todo/> */}
      {/* <h1>{User}</h1> */}
    </div>
  )
}
export default App;