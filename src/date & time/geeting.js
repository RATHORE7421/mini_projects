//chanfe ==ge content according to time zne
import React from "react";
import ReactDOM from "react-dom";



//Greeting
var current = new Date();

let greeting = '';
const a = {
};

if(current.getHours()>=0 && current.getHours()<12){
    greeting = 'Good morning';
    a.color='brown'
}else if(current.getHours()>=12 && current.getHours()<=18){
  greeting = 'Good afternoon';
  a.color='orange'
}else{
  greeting = 'Good night';
  a.color='green'
}

ReactDOM.render(
  <>
  <div>
<h1 >Hello Sir : <span style={a}> {greeting}</span> </h1> 
</div>
</>
, document.getElementById('root'));

