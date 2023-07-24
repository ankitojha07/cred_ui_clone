import React from 'react'
import './button.css'

const ButtonComponent = ({buttonText, onClick, customClass, prefix}) => {
  return (
    <div className={`flex absolute-center button-wrapper ${customClass}`} onClick={onClick}>
        {prefix} {buttonText}
    </div>
  )
}
export default ButtonComponent 