import React from 'react';
import Child from './Child';

function Parent() {
    const parentName="Alice";
    return <Child name={parentName}/>;
}

// ---------------------------------------------

import React from 'react';

function Child(props){
    return <div>Hello, {props.name}!</div>;
}

export default Child;

//Props or properties are way to pass data from parent component to a child component

//Child component cannot modify this value because they are read only
//Props and state both are used to control and manipulate How components behave and render


//DIFFERENCE BETWEEN STATE AND PROPS

//State is a mutable object that stores dynamic data based on user interaction
//Props are immutable objects that store static data

//State
//Is private and is fully controlled by the component it belongs to

//Props
//Is controlled only by the parent component and cannot be changed by the children


//CONTROLLED COMPONENTS

//Controlled components are used when control is required over the data being entered into a form

//Uncontrolled components are used when there is no need to dynamically inspect the user inputs
//When user uploads file because data directly sent to the server for evaluation
//Manage through ref 
//It makes it harder to access the values