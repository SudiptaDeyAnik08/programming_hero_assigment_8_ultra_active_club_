import React from "react";

const SingleCard = (props)=>{

    console.log(props.single);
    const {id,Title,Description,Age,time,image} = props.single;
    
    return(
        <div>
            <div>
                {/* <img src={props.cardData.image} alt="" /> */}
               
            </div>
        </div>
    )
}

export default SingleCard;