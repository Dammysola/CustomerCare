import React from 'react'
import Style from "./Profile_Success.module.css"
import blue_success from "../../assets/svg/blue_success.svg"




const Profile_Success = () => {
  return (
    <div id={Style.Approve_mainDiv}>
            <div id={Style.Approve_wrapperDiv}>

                <img id={Style.success_img} src={blue_success} alt="" />
                <p>Profile updated Successfully</p>

            </div>
        </div>
)
}

export default Profile_Success