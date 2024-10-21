import React from 'react'
import Style from "./Change_Password.module.css"
import warning from "../../../assets/svg/warning.svg"

const Change_Password = () => {
    return (

        <div id={Style.Change_Password_mainDiv}>
            <div id={Style.Change_Password_wrapperDiv}>

                <div id={Style.warning}>
                    <div id={Style.warning_img}>
                        <img src={warning} alt="" />
                    </div>
                </div>
                <p>Welcome, for security reasons you are required to change your password</p>

                <div id={Style.btnDiv}>
                    <button>Change Now</button>
                    <button>Change Later</button>
                </div>
            </div>
        </div>
    )
}

export default Change_Password