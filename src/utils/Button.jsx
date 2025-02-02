import React from 'react'

const Button = (props) => {
    const {buttonName} = props
  return (
    <div>
        <button>{buttonName}</button>
    </div>
  )
}

export default Button