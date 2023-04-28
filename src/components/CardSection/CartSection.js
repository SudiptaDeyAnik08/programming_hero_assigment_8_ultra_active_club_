import React from "react";

import "./CartSection.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, } from "@fortawesome/free-solid-svg-icons";

import profile_pic from "../../Assets/images/pro.jpg";



const CartSection=()=>{
    return(
        <div>
            <div className="profile">
                <div className="image_div">
                    <img src={profile_pic} alt="" />
                </div>
                <div className="profile_des">
                    <h3>Sudipta Dey Anik</h3>
                    <p>Dhaka,Bangladesh</p>
                    {/* Icon add kora baki */}
                </div>
            </div>
        </div>
    )
}

export default CartSection;