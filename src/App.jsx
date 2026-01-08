import { useState } from "react";

/* ===== COMPONENT IMPORTS ===== */
import College from "./College";
import Counter from "./Counter";
import Todo from "./ex1";
import Header from "./Header";
import MultiToggle from "./MultiConditionToggle";
import Student from "./Student";
import Toggle from "./Toggle";
import User1 from "./User";
import Login, { Signup, User } from "./UserComponent";
import Wrapper from "./Wrapper";
import InputFiled from "./InputFiled";
import ControlledComponent from "./ControlledComponent";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import DropDown from "./DropDown";
import Loop from "./Loop";
import Clock from "./Clock";
import NestedLoop from "./NestedLoop";
import Hook from "./Hook";
import Hooks from "./Hooks";
import InlineStyle from "./InlineStyle";
import StyledComp from "./StyledComp";
import Boostraped from "./Boostraped";
import HookuseRef from "./HookuseRef";
import UnControlledComponent from "./UnControlledComponent";
import FuncAsProp from "./FuncAsProp";
import HookUseFormStatus from "./HookUseFormStatus";
import HookUseTransition from "./HookUseTransition";
import Derived from "./Derived";
function App() {

  /* ===== BASIC FUNCTIONS ===== */
  function handleClick() {
    alert("Button Clicked");
  }

  function sum(a, b) {
    return a + b;
  }

  function opr(a, b, c) {
    if (c === "add") {
      return a + b;
    } else if (c === "sub") {
      return a - b;
    } else {
      return "Invalid Operation";
    }
  }

  /* ===== VARIABLES & OBJECTS ===== */
  let userObj = {
    name: "Mahek Sheth",
    age: 21,
    email: "mahek@123.com"
  };

  let arr = [10, 20, 30, 40, 50];

  let path =
    "https://images.pexels.com/photos/4473877/pexels-photo-4473877.jpeg";

  /* ===== STATE: FRUIT ===== */
  let [fruit, setFruit] = useState("Apple");

  function handleFruit() {
    setFruit("Mango");
  }

  /* ===== USER DATA ===== */
  let userDetails = {
    name: "Mahek Sheth",
    age: 21,
    email: "maheksheth@gmail.com"
  };

  let userDetails1 = {
    name: "Riya Sheth",
    age: 21,
    email: "riyaasheth@gmail.com"
  };

  let userDetails2 = {
    name: "Kaushik Sheth",
    age: 63,
    email: "kmsheth@gmail.com"
  };

  /* ===== COLLEGE ARRAY ===== */
  let Colleges = ["DKIET", "LNCT", "RGPV", "IIT"];

  /* ===== STATE: STUDENT NAME ===== */
  const [sname, setName] = useState();

  /* ===== STATE: CLOCK COLOR ===== */
  const [color, setColor] = useState("green");

  function changeColor(event) {
    setColor(event.target.value);
  }

  /* ===== STATE: COUNTER ===== */
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  /* ===== STATE: DATA ===== */
  const [data, setData] = useState("");

  function handleData() {
    setData("Fetching Data...");
    console.log(data);
  }
  
  const passFunc=(name)=>{
    alert(name);
  }
  /* ===== JSX RETURN ===== */
  return (
    <div>
      <Derived/>
      <HookUseTransition/>
      <HookUseFormStatus/>
      <h1>Passing function as props in component</h1>

      <FuncAsProp func={passFunc} name="Mahek"/>
      <FuncAsProp func={passFunc} name="Peter"/>
      <FuncAsProp func={passFunc} name="Joe"/>
      <FuncAsProp func={passFunc} name="Ria"/>
      <UnControlledComponent/>
      <HookuseRef/>
      <Boostraped/>
      <StyledComp/>
      <InlineStyle/>
      {/* Hooks Example */}
      <Hooks count={count} data={data} />
      <button onClick={handleClick}>Counter</button>
      <button onClick={handleData}>Data</button>

      <Hook />
      <NestedLoop />

      {/* Clock Color Selection */}
      <h1>Select Colour</h1>
      <select onChange={changeColor} name="clock">
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
      </select>

      <Clock color={color} />

      {/* Form Components */}
      <Loop />
      <DropDown />
      <Radio name="female" />
      <Checkbox />
      <ControlledComponent />
      <InputFiled />

      {/* Wrapper Component */}
      <Wrapper color="orange">
        <h1>Wrapper Component</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Mahek</h1>
        <h3 style={{ color: "red" }}>Please login</h3>
      </Wrapper>

      {/* Conditional Rendering */}
      {sname && <Student name={sname} />}

      <button onClick={() => setName("Mahuu")}>
        Update Student Name
      </button>

      <Student name={sname} />

      {/* Props Passing */}
      <College name={Colleges} />

      <User1 user={userDetails} />
      <User1 user={userDetails1} />
      <User1 user={userDetails2} />

      {/* Toggle Components */}
      <MultiToggle />
      <Toggle />

      <h1>React JS</h1>

      {/* Fruit State */}
      <h1>Selected Fruit: {fruit}</h1>
      <button onClick={handleFruit}>Change Name</button>

      <Counter />

    </div>
  );
}

export default App;
