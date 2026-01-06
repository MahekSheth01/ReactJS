import {styled} from 'styled-components';

import React from 'react'

const StyledComp = () => {
    const Heading=styled.h1`
    color:teal;
    border-bottom:2px solid black;
    background-color:beige;
    padding:10px;
    text-align:center;
    margin:10px;
    border-radius:30px;
    `
  return (
    <div>
      <h1>Styled Components</h1>
      <Heading>Styled CSS</Heading>
      <Heading>Mahek Sheth</Heading>
    </div>
  )
}

export default StyledComp
