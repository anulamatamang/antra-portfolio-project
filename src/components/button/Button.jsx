import React from 'react'
import './Button.css'

function Button(props) {

  return (
    <button className={props.textColor == 'white' ? 'btn btn-border' : 'btn btn-black-border' }>{props.children}</button>
  )
}

export default Button