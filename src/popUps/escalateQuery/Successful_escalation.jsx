import React from 'react'
import Style from './Successful_escalation.module.css'
import success from '../../assets/svg/white_success.svg'
import copy from '../../assets/svg/copy.svg'
import Button from '../../components/button/Button'
import { PopupContextHook } from '../../PopupContext'



const successful_escalation = () => {

  const {updateSuccessEscalationPopup} = PopupContextHook()

    return (
        <div id={Style.successful_mainDiv}>
            
            <div id={Style.Successful_wrapperDiv}>

                <div id={Style.imgDiv}>
                    <img id={Style.success_img} src={success} alt="" />
                </div>

                <p id={Style.Successful_headerText}>Query Escalated Successfully</p>

                <div id={Style.Successful_tablewrapperDiv}>

                    <div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Ticket ID</p>
                        <p className={Style.detailsBold}>WH534RE0</p>
                    </div>

                    < div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Username</p>
                        <p className={Style.detailsBold}>John Doe</p>
                    </div>

                    <div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Query Category</p>
                        <p className={Style.detailsBold}>Billing</p>
                    </div>

                    <p id={Style.copyText}><img src={copy} alt="" /> Copy Details</p>

                    <div id={Style.buttonDiv}><Button onClick={()=>updateSuccessEscalationPopup(false)} text={"Go Home"} /></div>
                </div>
            </div>
        </div>
    )
}

export default successful_escalation