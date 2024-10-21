import React from 'react'
import Style from './ForgotPassword.module.css'
import { PopupContextHook } from '../../PopupContext'
// import { PopupContextHook } from '../../../WhiteHouse_PopupContext'



const ForgotPassword = () => {

    const {updatePasswordPopup} = PopupContextHook()

  return (

    <div id={Style.ForgotPassword_mainDiv} onClick={()=>updatePasswordPopup(false)}>
        
        <div id={Style.ForgotPassword_wrapperDiv}>
            <p>A notification has been sent to the admin, you will get password reset instructions soon</p>
        </div>
    
    </div>

  )
}

export default ForgotPassword