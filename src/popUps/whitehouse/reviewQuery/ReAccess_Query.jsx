import React from 'react'
import Style from "./Review_Query.module.css"
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'


const ReAccess_Query = () => {

  const { updateReAccessPopup } = PopupContextHook()



  return (
    <div id={Style.Query_mainDiv} onClick={() => updateReAccessPopup(false)}>

      <div id={Style.Query_wrapperDiv}>

        <p>Reaccess this query?</p>

        <div id={Style.btnDiv}>

          <button>Yes</button>
          <button onClick={() => updateReAccessPopup(false)}>Cancel</button>
        
        </div>
      </div>
    </div>
  )
}

export default ReAccess_Query