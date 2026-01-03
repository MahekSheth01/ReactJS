import React, { useState } from 'react'

const Clock = ({color}) => {
  const [time, setTime] = useState(new Date())

  setInterval(() => {
    setTime(new Date())
  }, 1000)

  return (
    <div>
      <h1>Clock Component</h1>
      <div style={{ fontSize: "24px", fontWeight: "bold", color: color, border: "2px solid black", padding: "10px", width: "200px", textAlign: "center" }}>
        {time.toLocaleTimeString()}
      </div>
    </div>
  )
}

export default Clock
