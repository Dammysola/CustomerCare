import React from 'react'
import Style from '../button/Button.module.css'


const Button = (props) => {
    const { type, text, onSubmit, onClick} = props
    
  return (
    <div>
       <button
      className={Style.button}
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}>
      {text}
    </button> 
    </div>
  )
}

export default Button