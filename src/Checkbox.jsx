import { useState } from "react";

const Checkbox=()=>{
    const [skills,setSkills]=useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((skill)=>skill!=event.target.value)]);
        }
    }
    

    return (
        <div>
            <h1>Select your Skils:</h1>
            <input onChange={handleSkills} type="checkbox" id="html" name="html" value="HTML"/>
            <label for="html"> HTML</label><br/>
            <input onChange={handleSkills}  type="checkbox" id="css" name="css" value="CSS"/>
            <label for="css"> CSS</label><br/>
            <input onChange={handleSkills}  type="checkbox" id="js" name="js" value="JavaScript"/>
            <label for="js"> JavaScript</label><br/>
            <input onChange={handleSkills}  type="checkbox" id="react" name="react" value="React"/>
            <label for="react"> React</label><br/>
            <h1>{skills.toString()}</h1>
        </div>
    )
}
export default Checkbox;