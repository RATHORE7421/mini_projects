import React from "react";

function Img(){
    const current = new Date();
const fate = current.toLocaleDateString();
const tme = current.toLocaleTimeString();
    return (
        
        <>
           <ol>
            <li>Today's date is {fate}</li>
            <li>Current time is {tme}</li>
           </ol>
           <a href = "https://www.forbes.com/profile/elon-musk/" target="_ptiya">
           <img src="https://picsum.photos/200/300" alt="Random_image"/>
           </a> 
        </>
    )
}

export default Img;