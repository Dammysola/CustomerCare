import React from 'react'
import Style from "./SignIn_Success.module.css"
import blue_success from "../../assets/svg/blue_success.svg"



const SignIn_Success = () => {

  return (

     <div id={Style.Approve_mainDiv}>
            <div id={Style.Approve_wrapperDiv}>

                <img id={Style.success_img} src={blue_success} alt="" />
                <p>SignIn Successful</p>

            </div>
        </div>
  )
}

export default SignIn_Success
