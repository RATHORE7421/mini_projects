import React from 'react';
import './netflix.css';
import Card from './App_p_card'
import Sarr from "./Array_netflix";

//challenge 5 Netflix originals
function scard(val){
   return (
     <Card
        key={val.id}
        imgsrc={val.imgsrc}
        sname={val.sname}
        title={val.title}
        slink={val.slink}

     />
   )
}

const Netflix_web=()=>
  {
  return (<>
  <div className="heading">
  <h1 >Top 5 most watched netflix series</h1>
  </div>
  <div className='boxes'>
  {Sarr.map(scard)}
  </div>
   </>);
   };

   export default Netflix_web;