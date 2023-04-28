import React, { useState } from "react";

import "./CartSection.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import profile_pic from "../../Assets/images/pro.jpg";



const CartSection=(props)=>{
    
    let exerciseTime = localStorage.getItem("breakTime");
    
    let exercise_time = props.exercisetimeTotal;

    if(exerciseTime === "null"){
        exerciseTime = 0;
    }

    const [breakTime,setBreakTime] = useState(exerciseTime);

    const handleBreakTime=(r)=>{
        console.log(r);
        setBreakTime(r);
    }
    localStorage.setItem("breakTime",breakTime);

    const notify = () => toast("Congratulation, you have done it.");

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
                    <button onClick={res=>handleBreakTime(10)}>10s</button>
                    <button onClick={res=> handleBreakTime(20)}>20s</button>
                    <button onClick={res=> handleBreakTime(30)}>30s</button>
                    <button onClick={res=> handleBreakTime(40)}>40s</button>
                    <button onClick={res=> handleBreakTime(50)}>50s</button>
                </div>
            </div>
            
            <div className="Exercise_Details">
                <h2>Exercise Details</h2>
                <div className="Exercise_time div_flex">
                     <h4>Exercise time</h4>
                     <p>{exercise_time} seconds</p>
                </div>

                <div className="Break_time div_flex">
                     <h4>Break time</h4>
                     <p>{breakTime} seconds</p>
                </div>

            </div>

            <button className="activity_completed_btn" onClick={notify}>Activity Completed</button>
            <ToastContainer />


           </div>
        </div>
    )
}

export default CartSection;