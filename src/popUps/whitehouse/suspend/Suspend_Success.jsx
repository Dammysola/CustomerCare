import React from 'react'
import Style from "../pending_trash/approve/Approve.module.css"
import blue_success from "../../../assets/svg/blue_success.svg"



const Suspend_Success = () => {
    return (
        <div id={Style.Approve_mainDiv}>
            <div id={Style.Approve_wrapperDiv}>

                <img id={Style.success_img} src={blue_success} alt="" />
                <p>Account Suspended</p>

                <div id={Style.btnDiv}>
                    <button>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Suspend_Success