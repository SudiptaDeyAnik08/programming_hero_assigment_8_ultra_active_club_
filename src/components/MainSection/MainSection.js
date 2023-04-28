import React, { useState } from "react";

import './MainSection.css'

import {data} from '../data.js';
import SingleCard from "../SingleCard/SingleCard.js";

import logo from '../../Assets/images/logo (2).png';

const MainSection =(props)=>{
    

   const handelExerciseTime2=(time)=>{
    
    console.log(time);
    props.exerciseTimeFunction(time);
   }
  
    // console.log(data)
    return(
        <div>
            <div className="heading"> 
                <img id="logo" src={logo} alt="" />  
                <h2>Super-Active-club</h2>
            </div>
            <h4  id="h4"> Select today’s exercise</h4>
            
           <div id="MainSection_body">
            <div className="Single_Card">
                {
                    data.map(res=> 
                        // console.log(res.Title);
                        <SingleCard single={res} exerciseTimeFun2={handelExerciseTime2}></SingleCard>
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default MainSection;