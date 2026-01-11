import React, { useId } from 'react'

const HookuseId = () => {
  const name=useId();
  const password=useId();
  const terms=useId();

  return (
    <div>
      <h1>UseId hook</h1>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{terms}</h3>
    </div>
  )
}

export default HookuseId
