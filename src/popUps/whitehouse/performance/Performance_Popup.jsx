import React from 'react'
import Style from "./Performance_Popup.module.css"
import cancel from "../../../assets/svg/cancel.svg"



const Performance_Popup = () => {
    return (
        <div id={Style.Performance_Popup_mainDiv}>
            <div id={Style.Performance_Popup_wrapperDiv}>

                <div id={Style.imgDiv}>
                    <img src={cancel} alt="" />
                </div>

                <div id={Style.Query_details}>
                    Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                    Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                    Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate...
                </div>
            </div>
        </div>
    )
}

export default Performance_Popup