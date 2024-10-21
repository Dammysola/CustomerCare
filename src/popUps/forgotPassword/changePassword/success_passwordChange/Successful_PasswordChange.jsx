import React from 'react'
import Style from "./Successful_PasswordChange.module.css"
import success from "../../../../assets/svg/white_success.svg"


const Successful_PasswordChange = () => {
    return (
        <div id={Style.successful_mainDiv}>

            <div id={Style.Successful_wrapperDiv}>

                <div id={Style.imgDiv}>
                    <img id={Style.success_img} src={success} alt="" />
                </div>

                <div id={Style.Successful_headerText}>Password Changed Successfully</div>
            </div>
        </div>
    )
}

export default Successful_PasswordChange