import React from 'react'

const Button = ({children, style, onClick}) => {
  return (
    <div style={style} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button