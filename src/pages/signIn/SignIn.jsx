import React, { useState } from 'react'
import Style from './SignIn.module.css'
// import WH_logo from '../../../../assets/images/WH_logo.png'
import WH_logo from "../../assets/images/WH_logo.png"
import Input from '../../components/SignUp_input/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
// import { PopupContextHook } from '../../PopupContext'
import { login_provider } from '../api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../PopupContext'




const SignIn = () => {
  const navigate = useNavigate();
  const { updateLoadingPopup, updateErrorText, updateErrorPopup, updateSignInSuccess} = PopupContextHook();


  const [signIn, setSignIn] = useState({
    email: '',
    password: ''
  })

  
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  })
  const Details = (e) => {
    const name = e.target.name
    const value = e.target.value

    setSignIn(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const LoginSubmit = async () => {

    //The request Body

    let body = signIn;

    //This initiates the provider that handles the login API.
    login_provider(body, navigate, updateSignInSuccess, updateLoadingPopup, updateErrorText, updateErrorPopup);

  }
  const handleSubmit = (e) => {

    e.preventDefault(e)

    let emailVal = signIn.email.includes("@") && signIn.email.includes(".") ? false : true;
    let passwordVal = signIn.password.length > 4 ? false : true;

    setValidation({
      email: emailVal,
      password: passwordVal,
    })

    let valid = emailVal == false && passwordVal == false


    if (valid) {
      LoginSubmit()
    }

    // LoginSubmit()

    console.log(signIn.email, signIn.password)
  }





  const { updatePasswordPopup } = PopupContextHook()

  const showPopup = () => {
    updatePasswordPopup(true)
  }


  return (
    <div id={Style.CC_SignIn_mainDiv}>

      <div id={Style.CC_SignIn_wrapperDiv}>
        <div id={Style.SignIn_headerDiv}>
          <img src={WH_logo} alt="" />

          <p id={Style.signIn_Text}>Sign In into your Account</p>
          <p id={Style.login_detailsText}>Sign in by filling your administrator login details below</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div id={Style.inputDiv}>
            <Input
              placeholder={"account@email.com"}
              type={"email"}
              label={"Email"}
              name="email"
              value={signIn.email}
              error={validation.email}
              onChange={Details} />

            <Input
              placeholder={"Password"}
              type={"password"}
              label={"Password"}
              name="password"
              value={signIn.password}
              error={validation.password}
              onChange={Details} />
          </div>

          <div id={Style.checkbox_passwordDiv}>

            <p id={Style.Stay_signedIn}> <input type="checkbox" name="" id="" /> Stay Signed In</p>

            <p id={Style.forget_passwordText} onClick={showPopup}>Forgot Password?</p>

          </div>

          {/* <Link to={"/dashboard"}>  */}
          <div id={Style.btnDiv}><Button type={"submit"} text={"Sign In"} /></div>
          {/* </Link> */}

        </form>
      </div>
    </div>
  )
}

export default SignIn