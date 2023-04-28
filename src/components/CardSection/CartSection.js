import React from "react";

import "./CartSection.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, } from "@fortawesome/free-solid-svg-icons";

import profile_pic from "../../Assets/images/pro.jpg";



const CartSection=()=>{
    return(
        <div  className="pos">
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
            
          
            <div className="body_info">
                    <div className="body_info_title">
                        <div className="common_class">
                            <h2>80</h2>
                            <h6>kg</h6>
                        </div>
                        <p>Weight</p>
                    </div>
                    <div className="body_info_title">
                        <div className="common_class">
                            <h2>6.5</h2>
                            <h6>Feet</h6>
                        </div>
                        <p>Height</p>
                    </div>
                    <div className="body_info_title">
                        <div className="common_class">
                            <h2>23</h2>
                            <h6>yrs</h6>
                        </div>
                        <p>Age</p>
                    </div>
            </div>

            <div className="Add_A_Break">
                <h2>Add A Break</h2>
                <div id="button_group">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
            
            <div className="Exercise_Details">
                <h2>Exercise Details</h2>
                <div className="Exercise_time div_flex">
                     <h4>Exercise time</h4>
                     <p>200 seconds</p>
                </div>

                <div className="Break_time div_flex">
                     <h4>Exercise time</h4>
                     <p>15 seconds</p>
                </div>

            </div>

            <button className="activity_completed_btn">Activity Completed</button>

           </div>
        </div>
    )
}

export default CartSection;