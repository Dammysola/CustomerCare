import React from 'react'
import Style from "./Successful_Resolution.module.css"
import success from "../../../assets/svg/white_success.svg"
import copy from "../../../assets/svg/copy.svg"
import Button from "../../../components/button/Button"
import { PopupContextHook } from '../../../PopupContext'



const Successful_Resolution = () => {

    const {updateSuccessResolutionPopup, resolutionState} = PopupContextHook()
 
    const { ticket_id, message, query, details } = resolutionState;
    
    const [{ category }] = query
    const [{ username }] = details

   console.log(category);
   
   console.log(JSON.stringify(query));
   
   
    // const userDetails = resolutionState.userDetails
    // const resolution = resolutionState.resolution
    


    return (

        <div id={Style.Successful_Resolution_mainDiv}>
            <div id={Style.Successful_Resolution_wrapperDiv}>

                <div id={Style.imgDiv}>
                    <img src={success} alt="" />
                </div>

                <div>
                    <p id={Style.headerText}>Resolution Sent Successfully</p>

                    <div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Ticket ID</p>
                        <p className={Style.detailsBold}>{ticket_id}</p>
                    </div>

                    <div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Username</p>
                        <p className={Style.detailsBold}>{username}</p>
                    </div>

                    <div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Query Category </p>
                        <p className={Style.detailsBold}>{category}</p>
                    </div>

                    <p id={Style.resolutionText}>Resolution</p>

                    <p id={Style.resolution_details}>{message}
                    </p>

                    <p id={Style.copyText}><img src={copy} alt="" />Copy Details</p>


                    <div id={Style.ButtonDiv}>
                        <Button text={"Go Home"} onClick={() => updateSuccessResolutionPopup(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Successful_Resolution