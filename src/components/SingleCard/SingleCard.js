import React from "react";

import './SingleCard.css'


const SingleCard = (props)=>{

    console.log(props.single);
    const {id,Title,Description,Age,time,image} = props.single;
    
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
                    <p>Time Required: {time}</p>
                    <button>Add To list</button>
                </div>
               
            </div>
        </div>
    )
}

export default SingleCard;