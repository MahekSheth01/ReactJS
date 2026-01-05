import React from 'react'

const InlineStyle = () => {
    const cardStyle={
        margin:"10px",
        backgroundColor:"beige",
        width:"200px",
        padding:"10px",
        borderRadius:"10px",
        boxShadow:"5px 5px 10px grey"
    }
  return (
    <div>
      <h1 style={{color:"red"}}>Inline CSS</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      <div style={cardStyle}>
        <img style={{width:"200px" ,height:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="image" />
        <div style={{color:"blue"}}>
            <h4>Mahek Sheth</h4>
            <p>Software Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px" ,height:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="image" />
        <div style={{color:"blue"}}>
            <h4>Mahi</h4>
            <p>Data Analyst</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px" ,height:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="image" />
        <div style={{color:"blue"}}>
            <h4>Niya</h4>
            <p>Data Scientist</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px" ,height:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="image" />
        <div style={{color:"blue"}}>
            <h4>Raha</h4>
            <p>Flutter dev</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px" ,height:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="image" />
        <div style={{color:"blue"}}>
            <h4>Mahek Sheth</h4>
            <p>Software Developer</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px" ,height:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="image" />
        <div style={{color:"blue"}}>
            <h4>Mahi</h4>
            <p>Data Analyst</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px" ,height:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="image" />
        <div style={{color:"blue"}}>
            <h4>Niya</h4>
            <p>Data Scientist</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img style={{width:"200px" ,height:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="image" />
        <div style={{color:"blue"}}>
            <h4>Raha</h4>
            <p>Flutter dev</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default InlineStyle
