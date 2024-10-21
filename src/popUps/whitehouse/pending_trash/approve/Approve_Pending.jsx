import React from 'react'
import Style from "./Approve.module.css"
import blue_success from "../../../../assets/svg/blue_success.svg"
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'


const Approve_Pending = () => {

    const {updateApprovePendingPopup} = PopupContextHook()

    return (
        <div id={Style.Approve_mainDiv}>
            <div id={Style.Approve_wrapperDiv}>
                <img id={Style.success_img} src={blue_success} alt="" />
                <p>Approval Successful</p>
                <div id={Style.btnDiv}>
                    <button onClick={()=>updateApprovePendingPopup(false)}>Continue</button>
                </div>
            </div>
        </div>)
}

export default Approve_Pending