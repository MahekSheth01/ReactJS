import React from 'react';

class Greeting extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

export default Greeting;

//Before the Hooks
//Render()
//this.props
//extends React Component