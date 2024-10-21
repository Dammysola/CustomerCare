import React from 'react'
import Style from './Escalate_Query.module.css'
import { PopupContextHook } from '../../PopupContext'


const Escalate_Query = () => {

  const {updateSuccessEscalationPopup, updateConfirmEscalationPopup} = PopupContextHook()

  const success = ()=>{

    updateConfirmEscalationPopup(false)
    updateSuccessEscalationPopup(true)
  }
    
  return (
    <div id={Style.Escalate_Query_mainDiv}>
        <div id={Style.Escalate_Query_wrapperDiv}>
            <p>This query will be sent to the Amin Officer for review</p>

            <div id={Style.btnDiv}>
                <button onClick={success}>Yes</button>
                <button onClick={()=>updateConfirmEscalationPopup(false)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Escalate_Query