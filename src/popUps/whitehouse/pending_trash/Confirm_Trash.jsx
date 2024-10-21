import React from 'react'
import Style from "./Confirm.module.css"
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'


const Confirm_Trash = () => {

  const {updateConfirmTrashPopup, updateApproveTrashPopup} = PopupContextHook()

  const approve =()=>{
      updateConfirmTrashPopup(false)
      updateApproveTrashPopup(true)
  }

  return (
    <div id={Style.Confirm_mainDiv}>
            <div id={Style.Confirm_wrapperDiv}>
                <p>Are you sure you want to move this request to trash?</p>
                <div id={Style.btnDiv}>
                    <button onClick={approve}>Yes</button>
                    <button onClick={()=>updateConfirmTrashPopup(false)}>Cancel</button>
                </div>
            </div>
        </div>
  )
}

export default Confirm_Trash