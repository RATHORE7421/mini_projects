import React from "react";

function Add(a , b ){
    return a+b;
}

function Sub(a , b){
    return a-b;
}

function Mul(a , b){
    return a*b;
}

function Divi(a , b){
   var c = a/b;
   c = c.toFixed(2);
return c;  
}

export {Add , Sub , Mul , Divi};