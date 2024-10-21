import React from 'react'
import Style from '../input/InputField.module.css'



const InputField = (props) => {
    const {label,placeholder,type, value, name, OnChange, style} = props
  return (
    <div className={Style.InputDiv}>
         <label className={Style.label}>{label}</label> 
        <input
                className={Style.input}
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                onChange={OnChange}
                // style={{border: `${error ? "1px solid red" : "none"}`}}
            />
              
    </div>
  )
}

export default InputField