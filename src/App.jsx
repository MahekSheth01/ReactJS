import College from "./College";
import Counter from "./Counter";
import Todo from "./ex1";
import Header from "./Header";
import MultiToggle from "./MultiConditionToggle";
import Toggle from "./Toggle";
import User1 from "./User";
import Login, { Signup, User } from "./UserComponent";
import {useState} from "react";

function App(){
  function handleClick(){
    alert("Button Clicked");
  }
  // const name=undefined;
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
let path = "https://images.pexels.com/photos/4473877/pexels-photo-4473877.jpeg";

let [fruit,setFruit]=useState("Apple");

function handleFruit(){
  setFruit("Mango");
}

// let name="Mahek Sheth";
// let age=21;
// let email="maheksheth@gmail.com"

let userDetails={
  name:"Mahek Sheth",
  age:21,
  email:"maheksheth@gmail.com"}


let userDetails1={
  name:"Riya Sheth",
  age:21,
  email:"riyaasheth@gmail.com"}

let userDetails2={
  name:"Kaushik Sheth",
  age:63,
  email:"kmsheth@gmail.com"}

  let Colleges=["DKIET","LNCT","RGPV","IIT"];
  return (
    <div>
      <College name={Colleges}/>
      <User1 user={userDetails}/>
      <User1 user={userDetails1}/>
      <User1 user={userDetails2}/>
      

      
      <MultiToggle/>
      <Toggle />
      <h1>React JS</h1>
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <h1>Username:{name}</h1>
      <h2>Sum of a+b : {sum(10,2)}</h2>
      <h3>Operation output : {opr(10,2,"sub")}</h3>
      <h4>Condition output: {name?name:"User not found"}</h4>
      <h3>Object fetching :{userObj.name}</h3>
      <h4>Array : {arr[1]}</h4>
      <img src={path} alt="random img" width="300"/> */}
      {/* <button onClick={()=>fruit("Apple")}>Apple</button><br></br>
      <button onClick={()=>fruit("Banana")}>Banana</button> */}
      <h1>Selected Fruit: {fruit}</h1>
      <button onClick={handleFruit}>Change Name</button>
      <Counter />
      {/* <Header />
      <Login />
      <Signup />
      <Todo/> */}
      {/* <h1>{User}</h1> */}
    </div>
  )
}
export default App;