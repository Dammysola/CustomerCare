import React from 'react'
import Style from '../filter/Filter_Options.module.css'
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'


const Filter_options = () => {
  const {updateFilterPopup} = PopupContextHook()
  
  return (
    <div id={Style.Filter_options_mainDiv}>
      <button id={Style.Filter_options_mainButton} onClick={()=>updateFilterPopup(false)}></button>
      {/* <div> */}
        <div id={Style.Filter_options_wrapperDiv}>
          <div><input type="radio" name="" id="" /> By Users ID</div>
          <div><input type="radio" name="" id="" /> By Ticket ID</div>

        </div>
       
      {/* </div> */}
    </div>
  )
}

export default Filter_options