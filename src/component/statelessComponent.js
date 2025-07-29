import React from 'react';

function Welcome({name}){
    return <h1>Welcome, {name}!</h1>;
}

export default Welcome;

//Do not manage or store data
//They simply receive data via propmts and displays it
//Mainly use when logic is not needed just content should be displayed