import React from 'react'
import Style from "./Suspend.module.css"



const Suspend_CC = () => {
  return (
    <div id={Style.Query_mainDiv}>
        <div id={Style.Query_wrapperDiv}>
            <p>Suspend this account?</p>
            <div id={Style.btnDiv}>
                <button>Yes</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
)
}

export default Suspend_CC