const Checkbox=()=>{

    

    return (
        <div>
            <h1>Select your Skils:</h1>
            <input type="checkbox" id="html" name="html" value="HTML"/>
            <label for="html"> HTML</label><br/>
            <input type="checkbox" id="css" name="css" value="CSS"/>
            <label for="css"> CSS</label><br/>
            <input type="checkbox" id="js" name="js" value="JavaScript"/>
            <label for="js"> JavaScript</label><br/>
            <input type="checkbox" id="react" name="react" value="React"/>
            <label for="react"> React</label><br/>
        </div>
    )
}
export default Checkbox;