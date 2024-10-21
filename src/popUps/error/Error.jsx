import React from 'react'
import style from "./Error.module.css"
import errorImg from "../../assets/svg/error.svg"
import { PopupContextHook } from '../../PopupContext';



const Error = () => {

  const {errorText} = PopupContextHook();
  return (
    <div id={style.mainDiv}>
      <div id={style.wrapper}>
        <img src={errorImg} />
        <div id={style.errorText}>{errorText}</div>
      </div>
    </div>
  )
}

export default Error