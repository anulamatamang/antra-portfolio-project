import React from 'react'

function Button(props) {

  return (
    <button className={props.textColor == 'white' ? 'btn btn-border' : 'btn btn-black-border' }>{props.text}</button>
  )
}

export default Button