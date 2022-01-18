import React,{useState} from "react";
import './counter.css';

const Counter = ()=>{
    // const state = useState();
    // let cnt = new Date();
    // const [curr , setupdated] = useState(cnt.toLocaleTimeString());

// const Incre=()=>{
//     cnt = new Date();
//      setupdated(cnt.toLocaleTimeString());
// }
// setInterval(Incre , 1000);

const n="red";
const [bg , setBG]=useState(n);
const m="Click Me";
const [text , setBGT]=useState(m);
const bgChange1=()=> {
    let newBG="blue";
    setBG(newBG);
    setBGT("Hey there 😸");
};

const bgChange2=()=> {
    let newBG="brown";
    setBG(newBG);
    setBGT("yup 😸");
};
   return (
   <>
       <div style={{backgroundColor:bg}}>
           <button  onClick={bgChange1} onDoubleClick={bgChange2}>{text}</button>
           {/* <h1>{curr}</h1> */}
           {/* <button onClick={Incre}>Click me</button> */}
           </div>
       </>
   );
}
export default Counter;
