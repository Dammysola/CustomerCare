import React from 'react'
import Style from "./Confirm.module.css"
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'


const Confirm_Pending = () => {

    const {updateConfirmPendingPopup, updateApprovePendingPopup} = PopupContextHook()

    const cancel =()=>{
        updateConfirmPendingPopup(false)
    }
    const approve =()=>{
        updateConfirmPendingPopup(false)
        updateApprovePendingPopup(true)
    }

    return (
        <div id={Style.Confirm_mainDiv}>
            <div id={Style.Confirm_wrapperDiv}>
                <p>Are you sure you want to approve this request?</p>
                <div id={Style.btnDiv}>
                    <button onClick={approve}>Yes</button>
                    <button onClick={cancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Confirm_Pending