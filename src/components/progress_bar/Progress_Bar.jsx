import React from 'react'
import Style from '../progress_bar/Progress_Bar.module.css'
import smiley from '../../assets/svg/gray_smiley.svg'

const Progress_Bar = (props) => {
    const {text, percent, infoText} = props
    return (
        <div id={Style.Performance_CardDiv}>
            <div className={Style.Revenue_earningDiv}>

                <p id={Style.averageCall_Text}>{text}</p>
                <p className={Style.priceText}>{percent}</p>
                <div className={Style.Revenue_progressDiv}>
                    <div className={Style.Revenue_progressBar}></div>
                    <img src={smiley} alt="" />
                </div>
                <p className={Style.Revenue_infoText}>{infoText}</p>
            </div>
        </div>
    )
}

export default Progress_Bar