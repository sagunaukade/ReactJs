var React=require('react');//simple
//import React from 'react';
var ReactDOM= require('react-dom');
//import ReactDOM from 'react-dom';
const name="Saguna";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
// const lname="Ukade";

//array element
//const arr=['Saguna' , 'Ukade']
ReactDOM.render(
 // <div>
<React.Fragment>
 
{/* <h1> my name is {fname} {lname}</h1>
<h1> my name is {fname + " " + lname}</h1>
<h1> my name is {`${fname} ${lname}`}</h1> */}

<h1>Hello My name is {name}</h1>
<p>Current date is={currDate}</p>
<p>Current time is={currTime}</p>

{/* <p> add of two num is {5+5}</p>
<p> random num is {Math.random()}</p> */}

</React.Fragment>
//</div>
,
document.getElementById('root'));