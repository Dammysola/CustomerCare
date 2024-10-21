import React from 'react'
import Style from '../Suspend_Users/Suspension.module.css'


const Suspended = () => {
  return (
    <div className={Style.Suspension_mainDiv}>
        <div className={Style.Suspension_WrapperDiv}>
            <p>User Suspended</p>
            <div id={Style.btnDiv}>
                <button id={Style.yesbutton}>continue</button>
               
            </div>
            
        </div>
    </div>
  )
}

export default Suspended