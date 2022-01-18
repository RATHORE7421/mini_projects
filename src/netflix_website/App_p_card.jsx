import React from "react";

function Card(props){
    return (
        <>
      <div className="pics hov">
          <div className="card">
              <img  src={props.imgsrc} alt={props.title}/>
          
          <div className="bottom">
              <p>A netflix original Series</p>
              <h2 className="series">{props.sname}</h2>
              <a href={props.slink}><button>Watch Now</button></a>
          </div></div>
      </div>
      
  </> 
    );
}

export default Card;