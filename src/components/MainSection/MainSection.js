import React, { useState } from "react";

import './MainSection.css'

import {data} from '../data.js';
import SingleCard from "../SingleCard/SingleCard.js";

const MainSection =()=>{
 
  
    // console.log(data)
    return(
        <div>
            <div className="heading"> 
                <h5>icon</h5>    
                <h2>UtRA-Active-club</h2>
            </div>
            <h4>Select today’s exercise</h4>
            
       
            {
                data.map(res=> 
                    // console.log(res.Title);
                    <SingleCard single={res}></SingleCard>
                )
            }
        </div>
    )
}

export default MainSection;