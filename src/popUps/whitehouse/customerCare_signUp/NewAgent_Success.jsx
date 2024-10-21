import React from 'react'
import Style from './NewAgent_Success.module.css'
import copy from '../../../assets/svg/copy.svg'
import success from '../../../assets/svg/white_success.svg'
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'




const NewAgent_Success = () => {

  const {updateSignUpPopup} = PopupContextHook()

  const cancel = ()=>{

    updateSignUpPopup(false)
  }

  return (

    <div id={Style.NewAgent_Success_mainDiv} onClick={cancel}>
      <div id={Style.NewAgent_Success_wrapperDiv}>
       <div id={Style.imgDiv}><img id={Style.success_img} src={success} alt="" /></div> 
        <p id={Style.NewAgent_Success_headerText}>Staff account created successfully</p>

        <div id={Style.NewAgent_Success_tablewrapperDiv}>

            <div className={Style.detailsDiv}>

              <p className={Style.detailsText}>Full Name</p>
              <p className={Style.detailsBold}>John Doe</p>
            </div>

            < div className={Style.detailsDiv}>

              <p className={Style.detailsText}>Email</p>
              <p className={Style.detailsBold}>Johndoe@gmail.com</p>
            </div>

            <div className={Style.detailsDiv}>

              <p className={Style.detailsText}>Password</p>
              <p className={Style.detailsBold}>KLM34Skmd</p>
            </div>
          
            <p id={Style.copyText}><img src={copy} alt="" /> Copy Details</p>
        </div>
      </div>
    </div>
  )
}

export default NewAgent_Success