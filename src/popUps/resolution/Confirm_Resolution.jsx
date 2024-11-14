import React from 'react'
import Style from "./Confirm_Resolution.module.css"
import { PopupContextHook } from '../../PopupContext'
import { postQueryResolveProvider } from '../../pages/api_detaills/provider/query_provider'



const Confirm_Resolution = () => {

    const { updateSuccessResolutionPopup, updateConfirmResolutionPopup, resolutionState, updateLoadingPopup, updateErrorText, updateErrorPopup,  } = PopupContextHook()


    const submitResolution = () => {

        let body = resolutionState


        postQueryResolveProvider(body, updateLoadingPopup, updateConfirmResolutionPopup, updateErrorText, updateErrorPopup, updateSuccessResolutionPopup)
    }



    return (
        <div id={Style.Escalate_Query_mainDiv}>

            <div id={Style.Escalate_Query_wrapperDiv}>

                <p>Confirm that your resolution perfectly addresses user query</p>

                <div id={Style.btnDiv}>
                    <button type='submit' onClick={submitResolution}>Yes</button>
                    <button onClick={() => updateConfirmResolutionPopup(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Confirm_Resolution