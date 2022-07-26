var React=require('react');//simple
//import React from 'react';
var ReactDOM= require('react-dom');
//import ReactDOM from 'react-dom';
const name="Pallavi Pawar";
//array element
//const arr=['Saguna' , 'Ukade']
ReactDOM.render(
 // <div>
<React.Fragment>
<h1> my name is {name}</h1>

<p> add of two num is {5+5}</p>
<p> random num is {Math.random()}</p>

</React.Fragment>
//</div>
,
document.getElementById('root'));