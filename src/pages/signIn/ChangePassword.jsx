import React from 'react'
import Style from "./SignIn.module.css"
import WH_logo from "../../assets/images/WH_logo.png"
import Input from '../../components/SignUp_input/Input'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'



const ChangePassword = () => {
  return (
    <div id={Style.CC_SignIn_mainDiv}>

    <div id={Style.CC_SignIn_wrapperDiv}>
      <div id={Style.SignIn_headerDiv}>
        <img src={WH_logo} alt="" />

        <p id={Style.signIn_Text}>Change Password</p>
        <p id={Style.login_detailsText}>Set your personalized password</p>
      </div>


      <form action="">
        <div id={Style.inputDiv}>
          <Input
            placeholder={"Enter your password"}
            label={"New Password"} />

          <Input
            placeholder={"Re-enter your password"}
            label={"Confirm Password"} />
        </div>

        <div id={Style.checkbox_passwordDiv}>
         
          <p id={Style.Stay_signedIn}> <input type="checkbox" name="" id="" /> Stay Signed In</p>

          <p id={Style.forget_passwordText}>Forgot Password?</p>

        </div>

        <Link > <div id={Style.btnDiv}><Button text={"Save Changes"} /></div></Link>

      </form>
    </div>
  </div>
  )
}

export default ChangePassword