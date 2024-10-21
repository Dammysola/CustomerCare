import React from 'react'
import Style from '../Suspend_Users/Suspension.module.css'
import Button from '../../../components/button/Button'


const Confirm_Suspension = () => {
  return (
    <div className={Style.Suspension_mainDiv}>
        <div className={Style.Suspension_WrapperDiv}>
            <p>Are you sure you want to suspend this user? </p>
            <div id={Style.btnDiv}>
                <button id={Style.yesbutton}>Yes</button>
                <Button
                text = {"No"}/>
            </div>
            
        </div>
    </div>
  )
}

export default Confirm_Suspension