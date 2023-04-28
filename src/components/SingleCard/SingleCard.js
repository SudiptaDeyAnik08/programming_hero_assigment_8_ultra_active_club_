import React, { useState } from "react";

import './SingleCard.css'
import { isDisabled } from "@testing-library/user-event/dist/utils";

import style from  './SingleCard.css';

const SingleCard = (props)=>{

    console.log(props.single);
    const {id,Title,Description,Age,time,image} = props.single;
   

    //using enable and disable
    const [isEnable,setIsEnable] = useState(false);
 
    const handleTime=(e)=>{
       
        props.exerciseTimeFun2(e);
        console.log(e); 
        setIsEnable(true)
    }

 
    
    return(
        <div>
            <div className="card">
                <div className="image_card">
                    <img src={image} alt="" />
                </div>
              
                <div className="card_body">
                    <h3>{Title}</h3>
                    <p>{Description}</p>
                    <h5>For Age: {Age}</h5>
                    <p>Time Required: {time}s</p>

                    <button className="stylecard_body_button" onClick={res=>handleTime(time) } disabled={isEnable} >Add To list {isDisabled ? style.card_body_disable:style.stylecard_body_button}
                    </button>
                </div>
               
            </div>
        </div>
    )
}

export default SingleCard;