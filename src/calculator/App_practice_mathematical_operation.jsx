import React from "react";
import {Add , Sub , Mul , Divi} from './Mathematical_operations';


function App(){
    return(
        <>
    <ol>
      <li>Sum of no is {Add(2 , 4 , 5)}</li>
      <li>Sub of two no is {Sub(6 , 4)}</li>
      <li>Multiplocation of two no. {Mul(4 , 5 , 6)}</li>
      <li>Division of two no. {Divi(14 , 6)}</li>
    </ol>
  </>
    );
}

export default App;