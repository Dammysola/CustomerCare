import React from 'react'
import Style from './Input.module.css'


const Input = (props) => {
  const { label, placeholder, type, value, name, onChange, error } = props
  return (

    <div className={Style.InputDiv}>
      <input
        className={Style.input}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        style={{ border: `${error ? "1px solid red" : ""}` }}
      />
      <label className={Style.label}>{label}</label>
    </div>

  )
}

export default Input